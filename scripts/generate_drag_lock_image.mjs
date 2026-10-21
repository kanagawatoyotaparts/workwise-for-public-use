import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const outputPath = path.join(rootDir, 'public', 'images', 'manual', 'mobile-landscape-drag-lock.png');

const svg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans', 'Noto Sans CJK JP', sans-serif">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000" flood-opacity="0.4"/>
    </filter>
    <filter id="badgeShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.12"/>
    </filter>
    <filter id="popupShadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- 全体背景 -->
  <rect width="1200" height="700" fill="url(#bgGrad)" />

  <!-- タイトル・ヘッダーエリア -->
  <g transform="translate(50, 30)">
    <rect x="0" y="0" width="1100" height="52" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1" />
    <circle cx="28" cy="26" r="9" fill="#3b82f6" />
    <text x="48" y="33" font-size="18" font-weight="bold" fill="#f8fafc">【新機能】スマホ横画面表示時のチップ誤操作防止（移動自動ロック＆スムーズスクロール）</text>
    <rect x="960" y="13" width="120" height="26" rx="13" fill="#10b981" />
    <text x="1020" y="30" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">v2.2.5 最新仕様</text>
  </g>

  <!-- スマホ横向き外観フレーム (ベゼル) -->
  <g transform="translate(50, 105)" filter="url(#shadow)">
    <!-- 端末外枠 -->
    <rect x="0" y="0" width="1100" height="550" rx="36" fill="#1e293b" stroke="#334155" stroke-width="4" />
    <!-- 端末インナー枠 -->
    <rect x="8" y="8" width="1084" height="534" rx="28" fill="#020617" />
    <!-- 画面領域 -->
    <rect x="24" y="16" width="1052" height="518" rx="18" fill="url(#screenBg)" />

    <!-- 画面内部コンテンツ -->
    <g transform="translate(24, 16)">
      <!-- アプリヘッダーバー -->
      <rect x="0" y="0" width="1052" height="44" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <circle cx="24" cy="22" r="12" fill="#2563eb" />
      <text x="24" y="27" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">W</text>
      <text x="46" y="27" font-size="15" font-weight="bold" fill="#2563eb">WorkWise</text>

      <rect x="140" y="9" width="115" height="26" rx="6" fill="#eff6ff" />
      <text x="197" y="26" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">ダッシュボード</text>

      <!-- 日付ナビゲーション -->
      <g transform="translate(410, 9)">
        <rect x="0" y="0" width="230" height="26" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
        <text x="115" y="18" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">◀  10月21日 (水) 今日  ▶</text>
      </g>

      <g transform="translate(900, 12)">
        <text x="100" y="16" font-size="11" font-weight="bold" fill="#64748b" text-anchor="end">管理者 DEMO</text>
        <circle cx="120" cy="11" r="11" fill="#3b82f6" />
        <text x="120" y="15" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">D</text>
      </g>

      <!-- ★ここが最重要：スマホ横画面表示中の誤操作防止バナー★ -->
      <g transform="translate(20, 56)" filter="url(#badgeShadow)">
        <rect x="0" y="0" width="1012" height="48" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
        
        <!-- スマホアイコン -->
        <g transform="translate(18, 12)">
          <rect x="0" y="0" width="16" height="24" rx="3" fill="#d97706" />
          <rect x="2" y="3" width="12" height="16" rx="1" fill="#fef3c7" />
          <circle cx="8" cy="21" r="1.5" fill="#ffffff" />
        </g>

        <!-- バナー説明テキスト -->
        <text x="48" y="30" font-size="13" font-weight="bold" fill="#78350f">
          モバイル表示中: <tspan fill="#92400e" font-weight="normal">誤操作防止のためチップ移動は</tspan><tspan fill="#b91c1c" font-weight="bold">【ロック中】</tspan><tspan fill="#92400e" font-weight="normal">です（画面全体のスクロールが最優先されます）</tspan>
        </text>

        <!-- ロック解除トグルボタン -->
        <g transform="translate(850, 9)">
          <rect x="0" y="0" width="148" height="30" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="1.5" />
          <text x="74" y="20" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">🔓 移動ロック解除</text>
        </g>
      </g>

      <!-- タイムラインエリア -->
      <g transform="translate(20, 116)">
        <!-- タイムライン枠 -->
        <rect x="0" y="0" width="1012" height="370" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />

        <!-- ヘッダー行 -->
        <rect x="0" y="0" width="1012" height="32" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
        <text x="45" y="21" font-size="12" font-weight="bold" fill="#475569">スタッフ</text>
        <line x1="90" y1="0" x2="90" y2="370" stroke="#e2e8f0" stroke-width="1" />
        <text x="125" y="21" font-size="12" font-weight="bold" fill="#475569">拠点</text>
        <line x1="165" y1="0" x2="165" y2="370" stroke="#e2e8f0" stroke-width="1" />

        <!-- 時間目盛り -->
        <g transform="translate(165, 0)">
          <line x1="0" y1="0" x2="847" y2="0" stroke="#e2e8f0" stroke-width="1" />
          <text x="20" y="21" font-size="11" fill="#64748b">9:00</text>
          <line x1="85" y1="0" x2="85" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="105" y="21" font-size="11" fill="#64748b">10:00</text>
          <line x1="170" y1="0" x2="170" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="190" y="21" font-size="11" fill="#64748b">11:00</text>
          <line x1="255" y1="0" x2="255" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="275" y="21" font-size="11" fill="#64748b">12:00</text>
          <line x1="340" y1="0" x2="340" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="360" y="21" font-size="11" fill="#64748b">13:00</text>
          <line x1="425" y1="0" x2="425" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="445" y="21" font-size="11" fill="#64748b">14:00</text>
          <line x1="510" y1="0" x2="510" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="530" y="21" font-size="11" fill="#64748b">15:00</text>
          <line x1="595" y1="0" x2="595" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="615" y="21" font-size="11" fill="#64748b">16:00</text>
          <line x1="680" y1="0" x2="680" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="700" y="21" font-size="11" fill="#64748b">17:00</text>
          <line x1="765" y1="0" x2="765" y2="370" stroke="#f1f5f9" stroke-width="1" />
          <text x="785" y="21" font-size="11" fill="#64748b">18:00</text>
        </g>

        <!-- 行1: 杉山和彦 -->
        <g transform="translate(0, 32)">
          <rect x="0" y="0" width="1012" height="64" fill="#f8fafc" />
          <line x1="0" y1="64" x2="1012" y2="64" stroke="#e2e8f0" stroke-width="1" />
          <text x="15" y="37" font-size="13" font-weight="bold" fill="#1e293b">杉山和彦</text>
          <text x="100" y="37" font-size="12" fill="#475569">横浜店</text>

          <!-- チップ1: 港南店 -->
          <g transform="translate(240, 10)">
            <rect x="0" y="0" width="120" height="44" rx="6" fill="#3b82f6" />
            <text x="12" y="20" font-size="11" font-weight="bold" fill="#ffffff">港南店</text>
            <text x="12" y="34" font-size="10" fill="#e0e7ff">10:00-11:00</text>
            <!-- 確マーク -->
            <circle cx="106" cy="14" r="8" fill="#1d4ed8" />
            <text x="106" y="18" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">確</text>
          </g>

          <!-- チップ2: 移動 -->
          <g transform="translate(390, 14)">
            <rect x="0" y="0" width="48" height="36" rx="4" fill="#e0e7ff" />
            <text x="24" y="22" font-size="10" fill="#3730a3" text-anchor="middle">移動</text>
          </g>

          <!-- チップ3: 武山店 -->
          <g transform="translate(445, 10)">
            <rect x="0" y="0" width="145" height="44" rx="6" fill="#3b82f6" />
            <text x="12" y="20" font-size="11" font-weight="bold" fill="#ffffff">武山店</text>
            <text x="12" y="34" font-size="10" fill="#e0e7ff">13:00-14:30 (90分)</text>
          </g>
        </g>

        <!-- 行2: 福原泰弘 -->
        <g transform="translate(0, 96)">
          <rect x="0" y="0" width="1012" height="64" fill="#ffffff" />
          <line x1="0" y1="64" x2="1012" y2="64" stroke="#e2e8f0" stroke-width="1" />
          <text x="15" y="37" font-size="13" font-weight="bold" fill="#1e293b">福原泰弘</text>
          <text x="100" y="37" font-size="12" fill="#475569">東名川崎</text>

          <!-- 汎用チップ: 業務 -->
          <g transform="translate(200, 14)">
            <rect x="0" y="0" width="95" height="36" rx="6" fill="#64748b" />
            <text x="47" y="23" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">業務</text>
          </g>
          <!-- チップ: 溝ノ口店 -->
          <g transform="translate(470, 10)">
            <rect x="0" y="0" width="115" height="44" rx="6" fill="#3b82f6" />
            <text x="12" y="20" font-size="11" font-weight="bold" fill="#ffffff">溝ノ口店</text>
            <text x="12" y="34" font-size="10" fill="#e0e7ff">13:30-14:30</text>
          </g>
        </g>

        <!-- 行3: 水野一也 -->
        <g transform="translate(0, 160)">
          <rect x="0" y="0" width="1012" height="64" fill="#f8fafc" />
          <line x1="0" y1="64" x2="1012" y2="64" stroke="#e2e8f0" stroke-width="1" />
          <text x="15" y="37" font-size="13" font-weight="bold" fill="#1e293b">水野一也</text>
          <text x="100" y="37" font-size="12" fill="#475569">横須賀店</text>

          <!-- 休憩チップ -->
          <g transform="translate(330, 14)">
            <rect x="0" y="0" width="65" height="36" rx="6" fill="#10b981" />
            <text x="32" y="23" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">休憩</text>
          </g>
        </g>
      </g>

      <!-- ★ユーザー向けガイド吹き出し・指スワイプ解説イラスト★ -->
      <g transform="translate(460, 290)" filter="url(#popupShadow)">
        <rect x="0" y="0" width="490" height="96" rx="14" fill="#0f172a" fill-opacity="0.92" stroke="#38bdf8" stroke-width="1.5" />
        
        <!-- 指スワイプアニメーション風アイコン -->
        <g transform="translate(24, 20)">
          <!-- 左右スワイプ矢印 -->
          <path d="M 10 30 L 65 30 M 10 30 L 22 20 M 10 30 L 22 40" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 65 30 L 120 30 M 120 30 L 108 20 M 120 30 L 108 40" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- タッチ指サークル -->
          <circle cx="65" cy="30" r="16" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2" />
          <circle cx="65" cy="30" r="6" fill="#38bdf8" />
        </g>
        
        <!-- テキスト解説 -->
        <text x="165" y="32" font-size="14" font-weight="bold" fill="#ffffff">指で触れてもチップは動かない安全設計</text>
        <text x="165" y="54" font-size="12" fill="#cbd5e1">画面全体の左右・上下スクロールが最優先されます</text>
        <text x="165" y="74" font-size="12" font-weight="bold" fill="#38bdf8">※ダブルタップで詳細ダイアログの閲覧も可能</text>
      </g>
    </g>
  </g>
</svg>
`;

async function main() {
  console.log('Regenerating mobile landscape drag lock illustration...');
  const buffer = Buffer.from(svg);
  await sharp(buffer)
    .png()
    .toFile(outputPath);
  console.log('Saved to:', outputPath);
}

main().catch(console.error);
