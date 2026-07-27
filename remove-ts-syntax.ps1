# PowerShell script to remove TypeScript syntax from JavaScript files

$files = Get-ChildItem -Path "e:\greenwall-showcase-main\src" -Recurse -Include "*.js", "*.jsx"
$processedCount = 0
$errorCount = 0

foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        $originalContent = $content
        
        # Remove: import { ..., type X, ... } patterns
        $content = $content -replace ', type \w+(?=\s*[,}])', ''
        $content = $content -replace 'import type\s+[^;]+;', ''
        
        # Remove type annotations from function parameters: param: Type => param
        $content = $content -replace ':\s*(?:(?:[\w<>[\]|&\s]*|\{[^}]*\})+)(?=[,\)])', ''
        
        # Remove type annotations from variable declarations: x: Type = => x =
        $content = $content -replace ':\s*(?:[\w<>[\]|&\s]+)(?=\s*=)', ''
        
        # Remove React.forwardRef<Ref, Props>(...) => React.forwardRef(...)
        $content = $content -replace 'React\.forwardRef<[^>]+>\(', 'React.forwardRef('
        $content = $content -replace '\.forwardRef<[^>]+>\(', '.forwardRef('
        
        # Remove generic type parameters from function/component calls: <Type>(...) => (...)
        $content = $content -replace '<\s*[\w\s|&,]+\s*>\s*(?=\()', ''
        
        # Remove type declarations: type X = {...}
        $content = $content -replace 'type\s+\w+\s*(?:<[^>]*>)?\s*=\s*(\{[^}]*\}|[^;]+);', ''
        
        # Remove interface declarations: interface X {...}
        $content = $content -replace 'interface\s+\w+\s*(?:extends\s+[^{]+)?\s*\{[^}]*\}', ''
        
        # Remove React.ComponentPropsWithoutRef and similar generic types
        $content = $content -replace 'React\.ComponentPropsWithoutRef<[^>]+>', 'React.ComponentPropsWithoutRef'
        $content = $content -replace 'React\.HTMLAttributes<[^>]+>', 'React.HTMLAttributes'
        $content = $content -replace 'React\.ElementRef<[^>]+>', 'React.ElementRef'
        $content = $content -replace 'React\.ButtonHTMLAttributes<[^>]+>', 'React.ButtonHTMLAttributes'
        
        # Remove : ReturnType annotations at end of function declarations
        $content = $content -replace ':\s*(?:[\w<>[\]|&\s]+)(?=\s*[\{;])', ''
        
        # Remove VariantProps type usage
        $content = $content -replace ',\s*VariantProps<[^>]+>', ''
        $content = $content -replace 'VariantProps<[^>]+>', ''
        
        # Remove ControllerProps type references
        $content = $content -replace 'ControllerProps<[^>]+>', 'ControllerProps'
        
        # Remove FieldPath and FieldValues type references
        $content = $content -replace 'FieldPath<[^>]+>', 'FieldPath'
        $content = $content -replace 'FieldValues\s*=\s*FieldValues', ''
        
        # Remove extends clauses with types
        $content = $content -replace '\s+extends\s+[\w<>[\]|&,\s]+(?=\s*=)', ''
        
        # Remove @type JSDoc comments
        $content = $content -replace '\s*\*\s*@type\s*\{[^}]+\}[^\n]*', ''
        $content = $content -replace '\s*\*\s*@param\s*\{[^}]+\}', ' * @param'
        $content = $content -replace '\s*\*\s*@returns?\s*\{[^}]+\}', ' * @returns'
        
        # Clean up multiple blank lines
        $content = $content -replace '(?:\r?\n){3,}', "`r`n`r`n"
        
        # Clean up trailing commas
        $content = $content -replace ',(\s*[}\]])', '$1'
        
        if ($content -ne $originalContent) {
            Set-Content $file.FullName -Value $content -Encoding UTF8 -NoNewline
            $processedCount++
            Write-Host "Processed: $($file.Name)"
        }
    }
    catch {
        $errorCount++
        Write-Host "ERROR in $($file.Name): $_"
    }
}

Write-Host "Completed: $processedCount files modified, $errorCount errors"
