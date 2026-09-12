# ESP Pocket Puter

<p align="center">

<a href="https://github.com/444Nazky/ESP-Pocket-Puter/stargazers"><img src="https://img.shields.io/github/stars/444Nazky/ESP-Pocket-Puter?style=social" alt="Stars"></a>
<a href="https://github.com/444Nazky/ESP-Pocket-Puter/network/members"><img src="https://img.shields.io/github/forks/444Nazky/ESP-Pocket-Puter?style=social" alt="Forks"></a>
<img src="https://img.shields.io/github/license/444Nazky/ESP-Pocket-project">
<img src="https://img.shields.io/badge/ESP32-C3-Super-Mini-FF6B35?style=flat-square&logo=espressif">
<img src="https://img.shields.io/badge/PlatformIO-ED6D5F?style=flat-square&logo=platformio">

</p>

A compact ESP32-based Flipper Zero alternative with WiFi, Bluetooth, IR, RF support, and more.

---

## Features

### Core System
- Menu-driven UI with 3 buttons (Up/Ok/Down)
- 128x64 OLED display (SSD1306 I2C)
- Modular architecture for easy extension

### WiFi Module
| Feature | Description |
| Feature | Device scanner |
| Beacon Spammer | Create fake APs / captive portals |
| Network Analyzer | WiFi enumeration tools |

### Bluetooth Module
| Feature | Description |
|---------|-------------|
| Device Scanner | Discover nearby BLE devices |
| FastPair Tools | Proximity testing tools |

### Infrared Module
| Feature | Description |
|---------|-------------|
| TV-B-Gone | Turn off any compatible TV |
| Universal Remote | Control TVs, projectors, AC units |

### RF Module (CC1101)
| Feature | Description |
|---------|-------------|
| Frequency Scanner | Identify signals |
| Code Grabber | Capture & replay codes |
| Tesla Opener | Open Tesla charge ports |

### Music Module
- Beep test
- Built-in melodies
- 3-key piano

---

## Hardware

| Component | Purpose |
|-----------|---------|
| ESP32-C3 Super Mini | Main controller |
| SSD1306 OLED 128x64 I2C | Display |
| IR Transmitter | Send IR signals |
| CC1101 RF Module | 433MHz+ |
| Passive Buzzer | Audio output |
| 3 Buttons | Input |

Full pinout in `src/global.hpp` — edit for your setup.

---

## Quick Start

```bash
git clone https://github.com/444Nazky/ESP-Pocket-Puter.git
cd ESP-Pocket-Puter
pio run --target upload
```

Requirements: PlatformIO, ESP32 board, USB cable

---

## Development

```bash
pio pkg install          # Install dependencies
pio run                  # Build
pio run --target upload   # Flash
pio device monitor        # Serial output
```

---

## License

MIT

---

## Contributing

PRs welcome. Please follow code style in CONTRIBUTING.md.
