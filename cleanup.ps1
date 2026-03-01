Write-Host "Starting ParfumWiki cleanup..."

$files = @(
  "src/app/providers.tsx",

  "src/features/perfumes/api/perfumeApi.ts",
  "src/features/perfumes/components/NotesPanel.tsx",
  "src/features/perfumes/components/RatingBars.tsx",
  "src/features/perfumes/pages/PerfumeDetailPage.tsx",
  "src/features/perfumes/pages/PerfumeListPage.tsx",

  "src/shared/hooks/useMediaQuery.ts",
  "src/shared/ui/Button.tsx",
  "src/shared/ui/Card.tsx",
  "src/shared/ui/Chip.tsx",
  "src/shared/ui/ProgressBar.tsx",
  "src/shared/utils/formatters.ts",

  "src/shared/ui/Toasts.tsx"
)

foreach ($file in $files) {
  if (Test-Path $file) {
    Remove-Item $file -Force
    Write-Host "Deleted $file"
  } else {
    Write-Host "Skipped (not found): $file"
  }
}

Write-Host "Cleanup finished."