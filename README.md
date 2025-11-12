# www.ezpps.si
A Vue.js website for European Confederation of Psychoanalytic Psychotherapies - Slovenia.

## TODO
1. DONE. Ustvari se novo spletno stran, npr. na domeni ezpps.kotnik.si.
2. DONE. Lastnik stare domene ezpps.org kupi novo domeno ezpps.si in epoštno gostovanje za to domeno, nastavi maile (npr. info@ezpps.si) in stestira, če vsi maili delujejo tako, kot so delovali na stari domeni ezpps.org.
3. DONE. Lastnik nove domene ezpps.si s pomočjo domenskega strežnika (DNS) preusmeri to domeno na novo spletno stran.
4. Lastnik stare domene ezpps.org to domeno in e-poštno gostovanje preusmeri na novo domeno. Torej če bo kdo vnesel v brskalnik ezpps.org, ga bo preusmerilo na ezpps.si. Če bo kdo poslal email na ezpps.org, ga bo preusmerilo/posredovalo na ezpps.si.
5. Lastnik stare spletne strani (narejene v Wordpressu) spletno stran ugasne.
6. Uporabnike se obvesti o prenovi spletne strani (na Facebooku, e-mailu itd.).
7. Po približno 8 mesecih (lahko tudi več, v kolikor obstaja sum, da bo kdo še poslal mail na to domeno) lastnik stare domene ezpps.org to domeno in e-poštno gostovanje ugasne.

Dodatno:
V DNS strežnik nove domene se vnese google-verification značko:
<meta name="google-site-verification" content="83ZDZCiDB0wX_qhzAhorrqy6QYJnT8_udmymHrujKlU"/>

## Update node on MacOS
```sh
brew update
```

## Update npm
```sh
npm install -g npm@latest
```

## Update packages
```sh
# Check for updates
ncu
# Update packages by modifying package.json
ncu -u
# Install new packages
npm install
```

## Project setup
```sh
npm install
```

### Compiles and hot-reloads for development
```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Hosting
- **Static website hosting provider**: Cloudflare Pages (hosts the static website)
