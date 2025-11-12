<p align="center"><img src="./logo.png" width="300px;" /></p>
<p align="center" style="font-weight: bold; text-align: center; font-family: monospace; padding-bottom: 15px;">留在鍵盤前，也能高效完成所有任務</p>

<p align="center" style="text-align: center;"><a href="https://opencollective.com/pomoday-project" alt="Financial Contributors on Open Collective"><img src="https://opencollective.com/pomoday-project/all/badge.svg?label=financial+contributors&style=for-the-badge" /></a> <img src="https://img.shields.io/github/license/huytd/pomoday-v2?style=for-the-badge"/> <img src="https://img.shields.io/badge/%23-community%20edition-blueviolet?style=for-the-badge"/></p>

<p align="center">線上體驗：https://pomoday.vercel.app</p>

---

- [Pomoday 是什麼？](#pomoday-是什麼)
- [核心特色](#核心特色)
- [使用與安裝指南](#使用與安裝指南)
  - [線上版本](#線上版本)
  - [自架部署](#自架部署)
- [開發模式](#開發模式)
- [Docker 支援](#docker-支援)
- [跨裝置同步](#跨裝置同步)
- [相似工具](#相似工具)
- [贊助與支持](#贊助與支持)
- [授權條款](#授權條款)

---

## Pomoday 是什麼？

![](screenshot.png)

Pomoday 是一套專為鍵盤操作打造的任務管理與番茄鐘工具。介面俐落、上手快速，卻仍保有高度彈性：你可以自由組合 GTD、Kanban、番茄工作法等不同工作流，建立專屬自己的高效率系統。

## 核心特色

1. 任務管理與標籤分類
2. 完整鍵盤指令操作流程
3. 內建工作計時器與時間統計
4. 今日活動日誌，隨時掌握專注度
5. 支援深色模式
6. 更多功能持續演進中

## 使用與安裝指南

你可以透過以下兩種方式使用 Pomoday：

### 線上版本

直接造訪 https://pomoday.app 即可使用最新版本。

### 自架部署

開始之前，請確認系統已安裝 `node` 與 `npm`。

1. 下載程式碼

   ```
   git clone https://github.com/huytd/pomoday-v2
   ```

2. 安裝相依套件

   ```
   npm install
   ```

3. 建置專案

   ```
   npm run dist
   ```

4. 將輸出的 `dist` 資料夾部署到任一靜態網站主機即可。

推薦使用 [Vercel](https://vercel.com/)（原 now.sh）快速部屬：

```
$ cd dist
$ vercel
```

## 開發模式

在開發環境中啟動即時預覽：

```
npm run dev
```

## Docker 支援

專案已提供 `Dockerfile` 與 `docker-compose.yml`，方便以容器方式運行：

```
$ docker-compose build
$ docker-compose up -d
```

## 跨裝置同步

若想自行串接雲端同步功能，請參考 [後端 API 規格說明](https://github.com/huytd/pomoday-v2/wiki/Pomoday-Backend-API-Specification) 自建服務。

在前端應用中輸入 `login` 指令，便可填入自架後端的 API URL。你也可以參考社群整理的 [第三方後端清單](<https://github.com/huytd/pomoday-v2/wiki/Backend-(for-data-synchronize)>)，挑選適合的部署方案。

## 相似工具

- [taskbook](https://github.com/klaussinani/taskbook)：出色的 CLI 任務管理應用，是 Pomoday 的靈感來源之一。

## 贊助與支持

感謝所有自專案創立以來就鼎力相助的夥伴與贊助者：

| <a href="https://github.com/imhuyqn"><img src="https://avatars0.githubusercontent.com/u/2289071?s=460&v=4" width="48" height="48"/></a> | <a href="https://github.com/ledongthuc"><img src="https://avatars1.githubusercontent.com/u/1828895?s=460&v=4" width="48" height="48"/></a> | <a href="https://github.com/trungfinity"><img src="https://avatars1.githubusercontent.com/u/6896444?s=460&v=4" width="48" height="48"/></a> | <a href="https://github.com/thaod"><img src="https://avatars3.githubusercontent.com/u/11632797?s=460&v=4" width="48" height="48"/></a> | <a href="https://github.com/mquy"><img src="https://avatars0.githubusercontent.com/u/1636026?s=460&v=4" width="48" height="48"/></a> | <a href="https://github.com/quannt"><img src="https://avatars1.githubusercontent.com/u/3423859?s=460&v=4" width="48" height="48"/></a> | <a href="https://github.com/dvkndn"><img src="https://avatars1.githubusercontent.com/u/5953369?s=460&v=4" width="48" height="48"/> |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|                                                [**imhuyqn**](https://github.com/imhuyqn)                                                |                                              [**ledongthuc**](https://github.com/ledongthuc)                                               |                                              [**trungfinity**](https://github.com/trungfinity)                                              |                                                 [**thaod**](https://github.com/thaod)                                                  |                                                 [**mquy**](https://github.com/mquy)                                                  |                                                [**quannt**](https://github.com/quannt)                                                 |                                              [**dvkndn**](https://github.com/dvkndn)                                               |

### 程式貢獻者

感謝每一位投入心力的貢獻者。[[加入我們](CONTRIBUTING.md)]
<a href="https://github.com/huytd/pomoday-v2/graphs/contributors"><img src="https://opencollective.com/pomoday-project/contributors.svg?width=890&button=false" /></a>

### 資金贊助者

想贊助 Pomoday 的長期發展？[[前往贊助](https://opencollective.com/pomoday-project/contribute)]

#### 個人贊助

<a href="https://opencollective.com/pomoday-project"><img src="https://opencollective.com/pomoday-project/individuals.svg?width=890"></a>

#### 組織贊助

若你的團隊願意贊助我們，我們會在此展示貴單位 Logo 與網站連結。[[立即支持](https://opencollective.com/pomoday-project/contribute)]

<a href="https://opencollective.com/pomoday-project/organization/0/website"><img src="https://opencollective.com/pomoday-project/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/1/website"><img src="https://opencollective.com/pomoday-project/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/2/website"><img src="https://opencollective.com/pomoday-project/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/3/website"><img src="https://opencollective.com/pomoday-project/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/4/website"><img src="https://opencollective.com/pomoday-project/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/5/website"><img src="https://opencollective.com/pomoday-project/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/6/website"><img src="https://opencollective.com/pomoday-project/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/7/website"><img src="https://opencollective.com/pomoday-project/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/8/website"><img src="https://opencollective.com/pomoday-project/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/pomoday-project/organization/9/website"><img src="https://opencollective.com/pomoday-project/organization/9/avatar.svg"></a>

## 授權條款

Pomoday 以 BSD 3-Clause 授權條款釋出。
