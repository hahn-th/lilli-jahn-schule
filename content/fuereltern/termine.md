---
title: "Termine"
date: 2022-05-11T20:00:39+02:00
draft: false
weight: 1
menu:
  main:
    weight: 1
    parent: fuereltern
---
Alle Termine können sie in ihrem persönlich Kalendar abonnieren. Der folgende Link muss dafür kopiert und in ein geeignetes Kalendar Programm / App auf dem Computer oder Smartphone hinzugefügt werden. Gewöhnlich heißt es dort, einen Kalendar abonnieren.

<div class="input-group mb-3">
  <div class="input-group-prepend"> 
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" 
                type="button" 
                onclick="copyToClipboardAndHidePopover('ics_url',this);"
                id="btn_copy_url"
                data-bs-container="body" 
                data-bs-toggle="popover" 
                data-bs-placement="top" 
                data-bs-content="URL kopiert!"
                data-bs-delay="300">
                  <i data-feather="copy"></i> &nbsp;&nbsp;Adresse kopieren            
                </button>
      </div>
  </div>
  <input id="ics_url" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value="{{< absurl termine-lilli-jahn-schule.ics >}}" readonly disabled>
</div>

<hr class="mt-5 mb-5">

{{< termine >}}