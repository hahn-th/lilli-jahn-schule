---
# Hier kann ein Title eingetragen werden. Der Titel muss in " eingefasst sein
title: "{{ replace .Name "-" " " | title }}"

# Datum der Veröffentlichung.
date: {{ .Date }}

draft: false
type: projekte

# Bild im images Ordner
# der Pfad muss ist relativ zu dieser Datei. Das heißt eine Datei im Unterordner "images" wird über images/dateiname.jpg angegeben.
thumbnail: images/uploads/vorschaubild-platzhalter.jpg

# Kategorien für den Beitrag.
categories:
  - Projekte
#Förderverein
#Aktuelles
---

<!-- Die folgende Zeile bitte löschen, falls keine Bilder angezeigt werden sollen -->

{{< gallery match="images/*" rowHeight="150" margins="5" thumbnailResizeOptions="600x600 q90 Lanczos" >}}
