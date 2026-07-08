# Kiiltokruunu

Ammattitaitoisen ikkunanpesupalvelun nettisivu. Moderni, minimalistinen tyyli ja tummansininen väripaletti.

## Rakenne

```
index.html        # Sivun sisältö
css/style.css     # Tyylit
js/main.js        # Mobiilivalikko + vuosiluku
images/           # Kuvat (logo, tiimikuvat)
```

## Kuvat

Sivu käyttää seuraavia kuvatiedostoja `images/`-kansiossa. Placeholder-versiot
(`.svg`) näkyvät, kunnes lisäät oikeat kuvat samoilla nimillä:

| Tiedosto        | Käyttö                    |
|-----------------|---------------------------|
| `logo.png`      | Logo (header + footer)    |
| `hugo.jpg`      | Tiimi – Hugo (LTN)        |
| `noel.jpg`      | Tiimi – Noel (CL)         |

Kun lataat oikean kuvan (esim. `images/hugo.jpg`), se korvaa placeholderin
automaattisesti – koodiin ei tarvitse koskea.

## Kehitys

Avaa `index.html` selaimessa, tai käynnistä paikallinen palvelin:

```bash
python3 -m http.server 8000
# http://localhost:8000
```
