#!/bin/bash

set -e

echo "Creating src folder structure..."

# Directories
mkdir -p \
  src/app \
  src/layouts \
  src/pages \
  src/features/perfumes/api \
  src/features/perfumes/components \
  src/features/perfumes/pages \
  src/shared/ui \
  src/shared/hooks \
  src/shared/utils \
  src/assets

# Files
touch \
  src/app/App.tsx \
  src/app/router.tsx \
  src/app/providers.tsx \
  src/layouts/AppLayout.tsx \
  src/pages/HomePage.tsx \
  src/features/perfumes/api/perfumeApi.ts \
  src/features/perfumes/components/PerfumeCard.tsx \
  src/features/perfumes/components/NotesPanel.tsx \
  src/features/perfumes/components/RatingBars.tsx \
  src/features/perfumes/pages/PerfumeListPage.tsx \
  src/features/perfumes/pages/PerfumeDetailPage.tsx \
  src/features/perfumes/types.ts \
  src/shared/ui/Button.tsx \
  src/shared/ui/Card.tsx \
  src/shared/ui/Chip.tsx \
  src/shared/ui/ProgressBar.tsx \
  src/shared/hooks/useMediaQuery.ts \
  src/shared/utils/formatters.ts \
  src/assets/logo.svg

echo "Done."
