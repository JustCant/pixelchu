
$mp3 = "C:\Users\cantleyj\Dev\pixel-art\assets\sounds\pikachu-cry.mp3"
$shell = New-Object -ComObject Shell.Application
$folder = $shell.Namespace((Split-Path $mp3))
$file = $folder.ParseName((Split-Path $mp3 -Leaf))

# Display common metadata
for ($i = 0; $i -lt 266; $i++) {
    $property = $folder.GetDetailsOf($file, $i)
    if ($property) {
        "$i : $($folder.GetDetailsOf($folder.Items, $i)) = $property"
    }
}
