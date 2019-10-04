# Corehalla Wiki Reference
> Brawlhalla Community Wiki

## Project Structure

### Pages
```
📁 wiki
├── 📁 raw
|   ├── 📄 README.md // Index File
|   ├── 📄 README_[LANG].md // Translation of the main file in another language.
|   ├── 📄 README_sv-SE.md // Example of a translation of the main file in swedish.
|   ├── 📁 Page Title // Page Folder
|   |   ├── 📄 README.md // Main file for the page, written in english.
|   |   ├── 📁 Subpage // Subpage (Same Page Structure)
|   |   |   ├── 📄 README.md
|   |   |   ├── 📄 README_fr-FR.md
|   |   ├── 📁 Another Subpage
|   |   |   ├── 📄 README.md
|   ├── 📁 Another Page
|   |   ├── 📄 README.md
|   |   ├── 📁 Subpage
|   |   |   ├── 📄 README.md
```

> [LANG] must be replaced by the language used see **Landcode Table** in the `resources` section below.

### Updates/Patches

- The `master` branch is the branch used on Corehalla.
- The `dev` branch is where you can push your changes so they can be reviewed and added to the master branch.
- Every new patch, a branch will be generated from the `master` branch before any content/gameplay related changes are made to the page (new skins/balance changes).
This will save the progress of the wiki and save all collected data relative to the now outdated patch. This branch will be protected and no commits will be possible.
Naming convention for the new branch is `BHPATCH_[PATCH]` (e.g `BHPATCH_3.49`)

## Resources
Landcode Table: <http://www.lingoes.net/en/translator/langcode.htm>