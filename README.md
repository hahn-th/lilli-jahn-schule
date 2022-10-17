# Website für die Lilli Jahn Schule in Immenhausen

Used libraries:

- Bootstrap (via NPM)
- jQuery (via NPM)
- Gallery Component -> https://github.com/mfg92/hugo-shortcode-gallery

## Benutzung

Neue Förderverein Projekte hinzufügen zu foerderverein/projekte/..../index.md
Es sollte Front Matter "image: ....jpg" hinzugefügt werden.
**Alternativ:**

```
hugo new --kind fv_projekt foerderverein/projekte/2021-CoronaWaldspieleSommer
```

Der Projektename kann entsprechend angepasst werden.

## Einzelne Bilder einbinden

Einbinden mit Shortcode:

```
{{<lightbox_image src="/images/maske_lilly.jpg" title="Schuldhund Lilli erklärt, wie man eine Maske trägt" class="float-start">}}
```

Als Klasse kann float-start, float-center, float-end angegeben werden.

## Gallery Component

Include with:

```
{{< gallery match="images/*" rowHeight="150" margins="5" thumbnailResizeOptions="600x600 q90 Lanczos" >}}
```

**Falls die Bilder nicht ausreichen um eine Zeile verzerrungsfrei zu füllen, muss die Option lastRow="nojustify" mit angegeben werden.**

## Externe Pakete

Folgende externe Pakete werden verwendet:

- Bootstrap
- jQuery
- Popper (für Bootstrap)

Bevor Hugo erstellt werden kann mit `hugo` oder `hugo server` muß mit dem Befehl `npm install` die Abhängigkeiten aktualisiert werden.
Anschließend mit `make build-js` die Dateien kopieren.

Die Pakete werden mit Hilfe von NPM verwaltet und aktualisiert.
Das CSS aus Bootstrap wird mit Hugo Pipes verarbeitet.
Die JavaScript Bibliotheken werden mit einer Makefile in die Zielordner kopiert.

Dafür unter Windows mit Chocolatey make installieren
`choco install make`

und mit `make build-js` ausführen.
