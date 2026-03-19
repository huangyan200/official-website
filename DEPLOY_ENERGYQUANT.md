# EnergyQuant.org 部署说明

## 1. 本地图片迁移（飞书 -> 本地）

已经完成代码改造：
- 项目页图片使用本地路径：`/images/projects/project-1.jpg` ~ `project-4.jpg`
- 联系页图片使用本地路径：`/images/contact/contact-office.jpg`
- OG 图片使用本地路径：`/images/og/*.jpg`
- 站点主域名已切换为：`https://energyquant.org`

你可以执行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\download-feishu-assets.ps1
```

下载完成后会覆盖：
- `client/public/images/projects/project-1.jpg`
- `client/public/images/projects/project-2.jpg`
- `client/public/images/projects/project-3.jpg`
- `client/public/images/projects/project-4.jpg`
- `client/public/images/contact/contact-office.jpg`

## 2. 构建

```powershell
npm install
npm run build
```

## 3. 服务器（Nginx）部署

将构建产物上传到服务器（例如 `/var/www/energyquant`），然后使用如下配置：

```nginx
server {
    listen 80;
    server_name energyquant.org www.energyquant.org;

    root /var/www/energyquant;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }
}
```

完成后申请 HTTPS 证书（Let's Encrypt）并启用 443。

## 4. DNS

在域名服务商把：
- `energyquant.org` 指向服务器公网 IP
- `www.energyquant.org` 做 CNAME 到 `energyquant.org`（或同样 A 记录）
