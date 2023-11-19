---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
thumbnail: images/uploads/vorschaubild-platzhalter.jpg
categories:
  - Projekte
#Förderverein
#Aktuelles
---

{{< gallery match="images/*" rowHeight="150" margins="5" thumbnailResizeOptions="600x600 q90 Lanczos" >}}
