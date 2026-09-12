# 🎮 ESP Pocket Puter

<p align="center">

<a href="https://github.com/444Nazky/ESP-Pocket-Puter/stargazers"><img src="https://img.shields.io/github/stars/444Nazky/ESP-Pocket-Puter?style=social"></a>
<a href="https://github.com/444Nazky/ESP-Pocket-Puter/network/members"><img src="https://img.shields.io/github/forks/444Nazky/ESP-Pocket-Puter?style=social"></a>
<img src="https://img.shields.io/github/license/444Nazky/ESP-Pocket-Puter">
<img src="https://img.shields.io/badge/ESP32-C3-Super-Mini-FF6B35?style=flat-square&logo=espressif">
<img src="https://img.shields.io/badge/PlatformIO-ED6D5F?style=flat-square&logo=platformio">
<img src="https://img.shields.io/badge/PlatformIO-Build-Pass-blue">
<img src="https://img.shields.io/badge/Contributions-Welcome-success?style=social">

</p>

## ⚡ What is ESP Pocket Puter?

| | |
|---|---|
| 💡 **Ultimate ESP32 toolkit** | Pocket-sized, all-in-one device |
| 📱 **Flipper Zero alternative** | Built with ESP32 + CC1101 |
| 🔧 **Modular design** | WiFi, BT, IR, RF, Music |
| 🎯 **For makers** | HackRF, DIY electronics enthusiasts |

> *"Your pocket-sized ESP32 hacking companion"*

## ✨ Features at a Glance

| Module | Capabilities |
|--------|-------------|
| 📶 **WiFi** | Scanner · Beacon spam · Captive portal · Network tools |
| 🔵 **Bluetooth** | Scanner · FastPair spam · BLE enumeration |
| 📡 **IR Remote** | TV-B-Gone · Universal remote · AC/P rojector control |
| 📻 **RF (CC1101)** | Frequency scanner · Code grabber · Replay · *Jammer* ⚠️ |
| 🎵 **Music** | Songs player · Piano · Beep test |
| 📟 **Extras** | Sub-GHz tools, SysInfo, Settings |

## 🛠️ Hardware

| Part | Link |
|------|------|
| ESP32-C3 Super Mini | [AliExpress](https://s.click.aliexpress.com/...) |
| SSD1306 OLED 128x64 I2C | [AliExpress](https://s.click.aliexpress.com/...) |
| CC1101 Transceiver | [AliExpress](https://s.click.aliexpress.com/...) |
| Components list | [Bill of Materials](link/to/bom) |

**Pinout:** `src/global.hpp` — edit pins to customize!

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/444Nazky/ESP-Pocket-Puter.git
cd ESP-Pocket-Puter

# Build & Flash
pio run --target upload
```

**Requirements:** PlatformIO (`pio`) · USB cable · ESP32-C3 board

## 🔧 Development

```bash
# Install deps
pio pkg install

# Build locally
pio run

# Flash
pio run --target upload --environment esp32dev

# Monitor serial
pio device monitor
```

## 🎨 Demo

| Mode | Description |
|------|-------------|
| Menu | Browse all modules |
| WiFi Scan | See nearby networks |
| IR Test | Fire TV-B-Gone |
| RF Scan | Detect frequencies |

## 📊 Stats

<p align="center">

| Stars | Forks | Languages |
|-------|-------|-----------|
| ⭐ 7 | 🍴 0 | C++ 95%+ |

</p>

## 📄 License

MIT — do anything, just attribute.
</p>

## 🤝 Contributing

PRs welcome! See [Contributing Guide](CONTRIBUTING.md).

## 🙏 Thanks

- [Flipper Zero](https://flipperzero.one) — concept inspiration
- [DevEclipse/ESP-Pocket-Puter](https://github.com/DevEclipse/ESP-Pocket-Puter) — base project
- [PlatformIO](https://platformio.org) — dev platform
- [ESP-IDF](https://docs.espressif.com) — ESP32 framework

---

<p align="center">
<strong>Star this repo if you found it useful!</strong>
<br><br>
<a href="https://star-history.com/444Nazky/ESP-Pocket-Puter"><img src="https://api.star-history.com/svg?type=Org&symbol=444Nazky/ESP-Pocket-Puter" width="400">
</a>
</p>

<p align="center">

Made with ❤️ by [444Nazky](https://github.com/444Nazky) · [Profile](https://github.com/444Nazky)

</p>
