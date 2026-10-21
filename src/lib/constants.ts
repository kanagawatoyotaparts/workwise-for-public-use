// 支社判別ヘルパー
export const isAichiBranch = (): boolean => {
  if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID === 'workwise-aichi') return true;
  if (typeof window !== 'undefined' && (window.location.hostname.includes('aichi') || window.location.host.includes('aichi'))) return true;
  return false;
};

// ==========================================
// 神奈川支社用 設定
// ==========================================
export const KANAGAWA_MAIN_STORES = [
  '横浜店',
  '横須賀店',
  '東名川崎店',
  '相模原店',
  '厚木店',
  '綾瀬店',
  '小田原店',
] as const;

export interface StoreLocation {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone?: string;
  postalCode?: string;
}

export const KANAGAWA_STORE_LOCATIONS: Record<string, StoreLocation> = {
  '横浜店': {
    name: '横浜店',
    address: '神奈川県横浜市保土ケ谷区法泉３丁目２７−９',
    latitude: 35.44618655316335,
    longitude: 139.5664574053842,
  },
  '横須賀店': {
    name: '横須賀店',
    address: '神奈川県横須賀市大矢部２丁目１１−１６',
    latitude: 35.241932012607535,
    longitude: 139.67738000000114,
  },
  '東名川崎店': {
    name: '東名川崎店',
    address: '神奈川県川崎市宮前区馬絹２丁目４−１７',
    latitude: 35.58151406452486,
    longitude: 139.59445975772667,
  },
  '東名川崎': {
    name: '東名川崎店',
    address: '神奈川県川崎市宮前区馬絹２丁目４−１７',
    latitude: 35.58151406452486,
    longitude: 139.59445975772667,
  },
  '相模原店': {
    name: '相模原店',
    address: '神奈川県相模原市中央区南橋本３丁目９−１６',
    latitude: 35.593133877999485,
    longitude: 139.34401845715982,
  },
  '厚木店': {
    name: '厚木店',
    address: '神奈川県厚木市岡田３１８４',
    latitude: 35.419215056140445,
    longitude: 139.36373258660512,
  },
  '厚木': {
    name: '厚木店',
    address: '神奈川県厚木市岡田３１８４',
    latitude: 35.419215056140445,
    longitude: 139.36373258660512,
  },
  '綾瀬店': {
    name: '綾瀬店',
    address: '神奈川県綾瀬市吉岡東１丁目１５−５１',
    latitude: 35.4264363355401,
    longitude: 139.42009704227777,
  },
  '小田原店': {
    name: '小田原店',
    address: '神奈川県小田原市飯泉９４−２',
    latitude: 35.280270808807884,
    longitude: 139.1705679442837,
  },
};

export const KANAGAWA_STORE_COLORS: Record<string, string> = {
  '横浜店': 'bg-blue-50/70 dark:bg-blue-950/20',
  '横須賀店': 'bg-teal-50/70 dark:bg-teal-950/20',
  '東名川崎店': 'bg-green-50/70 dark:bg-green-950/20',
  '東名川崎': 'bg-green-50/70 dark:bg-green-950/20',
  '相模原店': 'bg-yellow-50/70 dark:bg-yellow-950/20',
  '厚木店': 'bg-purple-50/70 dark:bg-purple-950/20',
  '厚木': 'bg-purple-50/70 dark:bg-purple-950/20',
  '綾瀬店': 'bg-orange-50/70 dark:bg-orange-950/20',
  '小田原店': 'bg-rose-50/70 dark:bg-rose-950/20',
};

export const KANAGAWA_STORE_ORDER: Record<string, number> = {
  '横浜店': 1,
  '横須賀店': 2,
  '東名川崎店': 3,
  '東名川崎': 3,
  '相模原店': 4,
  '厚木店': 5,
  '厚木': 5,
  '綾瀬店': 6,
  '小田原店': 7,
};

// ==========================================
// 愛知支社用 設定
// ==========================================
export const AICHI_MAIN_STORES = [
  '熱田営業所',
  '一宮営業所',
  '津島営業所',
  '小牧営業所',
  '春日井営業所',
  '東名営業所',
  '南営業所',
  '天白営業所',
  '半田営業所',
  '豊田営業所',
  '刈谷営業所',
  '西尾営業所',
  '豊川営業所',
  '岡崎営業所',
  '額田センター',
] as const;

export const AICHI_STORE_LOCATIONS: Record<string, StoreLocation> = {
  '熱田営業所': {
    name: '熱田営業所',
    address: '愛知県名古屋市熱田区六野一丁目2番9号',
    latitude: 35.1346864,
    longitude: 136.9104884,
    phone: '052-871-1151',
    postalCode: '456-0023',
  },
  '熱田': {
    name: '熱田営業所',
    address: '愛知県名古屋市熱田区六野一丁目2番9号',
    latitude: 35.1346864,
    longitude: 136.9104884,
  },
  '一宮営業所': {
    name: '一宮営業所',
    address: '愛知県一宮市平島一丁目2番地',
    latitude: 35.2869877,
    longitude: 136.831187,
    phone: '0586-77-1211',
    postalCode: '491-0833',
  },
  '一宮': {
    name: '一宮営業所',
    address: '愛知県一宮市平島一丁目2番地',
    latitude: 35.2869877,
    longitude: 136.831187,
  },
  '津島営業所': {
    name: '津島営業所',
    address: '愛知県津島市神守町字中ノ折75番3',
    latitude: 35.1731457,
    longitude: 136.7795195,
    phone: '0567-23-6222',
    postalCode: '496-0005',
  },
  '津島': {
    name: '津島営業所',
    address: '愛知県津島市神守町字中ノ折75番3',
    latitude: 35.1731457,
    longitude: 136.7795195,
  },
  '小牧営業所': {
    name: '小牧営業所',
    address: '愛知県小牧市元町四丁目54番地',
    latitude: 35.2851611,
    longitude: 136.9042532,
    phone: '0568-73-2311',
    postalCode: '485-0072',
  },
  '小牧': {
    name: '小牧営業所',
    address: '愛知県小牧市元町四丁目54番地',
    latitude: 35.2851611,
    longitude: 136.9042532,
  },
  '春日井営業所': {
    name: '春日井営業所',
    address: '愛知県春日井市篠木町七丁目36番地6',
    latitude: 35.2608253,
    longitude: 136.9928512,
    phone: '0568-83-5111',
    postalCode: '486-0851',
  },
  '春日井': {
    name: '春日井営業所',
    address: '愛知県春日井市篠木町七丁目36番地6',
    latitude: 35.2608253,
    longitude: 136.9928512,
  },
  '東名営業所': {
    name: '東名営業所',
    address: '愛知県長久手市戸田谷120番地',
    latitude: 35.1750036,
    longitude: 137.0363419,
    phone: '0561-62-6141',
    postalCode: '480-1124',
  },
  '東名': {
    name: '東名営業所',
    address: '愛知県長久手市戸田谷120番地',
    latitude: 35.1750036,
    longitude: 137.0363419,
  },
  '南営業所': {
    name: '南営業所',
    address: '愛知県名古屋市緑区定納山一丁目101番',
    latitude: 35.0571824,
    longitude: 136.9327851,
    phone: '052-625-5055',
    postalCode: '459-8011',
  },
  '南': {
    name: '南営業所',
    address: '愛知県名古屋市緑区定納山一丁目101番',
    latitude: 35.0571824,
    longitude: 136.9327851,
  },
  '天白営業所': {
    name: '天白営業所',
    address: '愛知県名古屋市天白区荒池一丁目1306番地',
    latitude: 35.1168077,
    longitude: 137.0129777,
    phone: '052-803-7011',
    postalCode: '468-0013',
  },
  '天白': {
    name: '天白営業所',
    address: '愛知県名古屋市天白区荒池一丁目1306番地',
    latitude: 35.1168077,
    longitude: 137.0129777,
  },
  '半田営業所': {
    name: '半田営業所',
    address: '愛知県半田市住吉町二丁目117番地',
    latitude: 34.9071671,
    longitude: 136.9311303,
    phone: '0569-23-2311',
    postalCode: '475-0862',
  },
  '半田': {
    name: '半田営業所',
    address: '愛知県半田市住吉町二丁目117番地',
    latitude: 34.9071671,
    longitude: 136.9311303,
  },
  '豊田営業所': {
    name: '豊田営業所',
    address: '愛知県豊田市下市場町八丁目6番地',
    latitude: 35.0657061,
    longitude: 137.1615468,
    phone: '0565-32-6701',
    postalCode: '471-0875',
  },
  '豊田': {
    name: '豊田営業所',
    address: '愛知県豊田市下市場町八丁目6番地',
    latitude: 35.0657061,
    longitude: 137.1615468,
  },
  '刈谷営業所': {
    name: '刈谷営業所',
    address: '愛知県刈谷市高松町三丁目41番地',
    latitude: 34.9830711,
    longitude: 137.0013372,
    phone: '0566-21-7451',
    postalCode: '448-0853',
  },
  '刈谷': {
    name: '刈谷営業所',
    address: '愛知県刈谷市高松町三丁目41番地',
    latitude: 34.9830711,
    longitude: 137.0013372,
  },
  '西尾営業所': {
    name: '西尾営業所',
    address: '愛知県西尾市平坂町中奥29番6',
    latitude: 34.8639488,
    longitude: 137.0253488,
    phone: '0563-59-3111',
    postalCode: '444-0305',
  },
  '西尾': {
    name: '西尾営業所',
    address: '愛知県西尾市平坂町中奥29番6',
    latitude: 34.8639488,
    longitude: 137.0253488,
  },
  '豊川営業所': {
    name: '豊川営業所',
    address: '愛知県豊川市下長山町高畑22番4',
    latitude: 34.8047769,
    longitude: 137.3821705,
    phone: '0533-85-8911',
    postalCode: '442-0824',
  },
  '豊川': {
    name: '豊川営業所',
    address: '愛知県豊川市下長山町高畑22番4',
    latitude: 34.8047769,
    longitude: 137.3821705,
  },
  '岡崎営業所': {
    name: '岡崎営業所',
    address: '愛知県岡崎市大樹寺二丁目5番6号',
    latitude: 34.984141,
    longitude: 137.1576324,
    phone: '0564-23-2711',
    postalCode: '444-2134',
  },
  '岡崎': {
    name: '岡崎営業所',
    address: '愛知県岡崎市大樹寺二丁目5番6号',
    latitude: 34.984141,
    longitude: 137.1576324,
  },
  '額田センター': {
    name: '額田センター',
    address: '愛知県岡崎市中伊西町字大皿田3番地1',
    latitude: 34.9893303,
    longitude: 137.2673814,
    phone: '0564-84-3101',
    postalCode: '444-3449',
  },
  '額田': {
    name: '額田センター',
    address: '愛知県岡崎市中伊西町字大皿田3番地1',
    latitude: 34.9893303,
    longitude: 137.2673814,
  },
};

export const AICHI_STORE_COLORS: Record<string, string> = {
  '熱田営業所': 'bg-blue-50/70 dark:bg-blue-950/20',
  '熱田': 'bg-blue-50/70 dark:bg-blue-950/20',
  '一宮営業所': 'bg-teal-50/70 dark:bg-teal-950/20',
  '一宮': 'bg-teal-50/70 dark:bg-teal-950/20',
  '津島営業所': 'bg-emerald-50/70 dark:bg-emerald-950/20',
  '津島': 'bg-emerald-50/70 dark:bg-emerald-950/20',
  '小牧営業所': 'bg-green-50/70 dark:bg-green-950/20',
  '小牧': 'bg-green-50/70 dark:bg-green-950/20',
  '春日井営業所': 'bg-lime-50/70 dark:bg-lime-950/20',
  '春日井': 'bg-lime-50/70 dark:bg-lime-950/20',
  '東名営業所': 'bg-yellow-50/70 dark:bg-yellow-950/20',
  '東名': 'bg-yellow-50/70 dark:bg-yellow-950/20',
  '南営業所': 'bg-amber-50/70 dark:bg-amber-950/20',
  '南': 'bg-amber-50/70 dark:bg-amber-950/20',
  '天白営業所': 'bg-orange-50/70 dark:bg-orange-950/20',
  '天白': 'bg-orange-50/70 dark:bg-orange-950/20',
  '半田営業所': 'bg-red-50/70 dark:bg-red-950/20',
  '半田': 'bg-red-50/70 dark:bg-red-950/20',
  '豊田営業所': 'bg-purple-50/70 dark:bg-purple-950/20',
  '豊田': 'bg-purple-50/70 dark:bg-purple-950/20',
  '刈谷営業所': 'bg-indigo-50/70 dark:bg-indigo-950/20',
  '刈谷': 'bg-indigo-50/70 dark:bg-indigo-950/20',
  '西尾営業所': 'bg-violet-50/70 dark:bg-violet-950/20',
  '西尾': 'bg-violet-50/70 dark:bg-violet-950/20',
  '豊川営業所': 'bg-pink-50/70 dark:bg-pink-950/20',
  '豊川': 'bg-pink-50/70 dark:bg-pink-950/20',
  '岡崎営業所': 'bg-rose-50/70 dark:bg-rose-950/20',
  '岡崎': 'bg-rose-50/70 dark:bg-rose-950/20',
  '額田センター': 'bg-cyan-50/70 dark:bg-cyan-950/20',
  '額田': 'bg-cyan-50/70 dark:bg-cyan-950/20',
};

export const AICHI_STORE_ORDER: Record<string, number> = {
  '熱田営業所': 1,
  '熱田': 1,
  '一宮営業所': 2,
  '一宮': 2,
  '津島営業所': 3,
  '津島': 3,
  '小牧営業所': 4,
  '小牧': 4,
  '春日井営業所': 5,
  '春日井': 5,
  '東名営業所': 6,
  '東名': 6,
  '南営業所': 7,
  '南': 7,
  '天白営業所': 8,
  '天白': 8,
  '半田営業所': 9,
  '半田': 9,
  '豊田営業所': 10,
  '豊田': 10,
  '刈谷営業所': 11,
  '刈谷': 11,
  '西尾営業所': 12,
  '西尾': 12,
  '豊川営業所': 13,
  '豊川': 13,
  '岡崎営業所': 14,
  '岡崎': 14,
  '額田センター': 15,
  '額田': 15,
};

// ==========================================
// 共通エクスポート（支社に応じて完全排他的に自動切り替え）
// ==========================================

// 画面表示・選択用店舗一覧（愛知支社版では愛知15営業所のみ、神奈川支社版では神奈川7店舗のみ）
export const MAIN_STORES: readonly string[] = new Proxy([] as unknown as readonly string[], {
  get(target, prop, receiver) {
    const list = isAichiBranch() ? AICHI_MAIN_STORES : KANAGAWA_MAIN_STORES;
    if (prop === 'length') return list.length;
    if (prop === Symbol.iterator) return list[Symbol.iterator].bind(list);
    if (typeof prop === 'string' && !isNaN(Number(prop))) return list[Number(prop) as unknown as number];
    const val = (list as any)[prop];
    return typeof val === 'function' ? val.bind(list) : val;
  }
});

// 営業所座標マップ（愛知支社版では愛知15営業所のみ、神奈川支社版では神奈川7店舗のみ）
export const STORE_LOCATIONS: Record<string, StoreLocation> = new Proxy({} as Record<string, StoreLocation>, {
  get(target, prop, receiver) {
    const map = isAichiBranch() ? AICHI_STORE_LOCATIONS : KANAGAWA_STORE_LOCATIONS;
    return (map as any)[prop];
  },
  ownKeys(target) {
    const map = isAichiBranch() ? AICHI_STORE_LOCATIONS : KANAGAWA_STORE_LOCATIONS;
    return Reflect.ownKeys(map);
  },
  getOwnPropertyDescriptor(target, prop) {
    const map = isAichiBranch() ? AICHI_STORE_LOCATIONS : KANAGAWA_STORE_LOCATIONS;
    return Reflect.getOwnPropertyDescriptor(map, prop);
  },
  has(target, prop) {
    const map = isAichiBranch() ? AICHI_STORE_LOCATIONS : KANAGAWA_STORE_LOCATIONS;
    return prop in map;
  }
});

// 店舗カラーマップ（愛知支社版では愛知15営業所のみ、神奈川支社版では神奈川7店舗のみ）
export const STORE_COLORS: Record<string, string> = new Proxy({} as Record<string, string>, {
  get(target, prop, receiver) {
    const map = isAichiBranch() ? AICHI_STORE_COLORS : KANAGAWA_STORE_COLORS;
    return (map as any)[prop];
  },
  ownKeys(target) {
    const map = isAichiBranch() ? AICHI_STORE_COLORS : KANAGAWA_STORE_COLORS;
    return Reflect.ownKeys(map);
  },
  getOwnPropertyDescriptor(target, prop) {
    const map = isAichiBranch() ? AICHI_STORE_COLORS : KANAGAWA_STORE_COLORS;
    return Reflect.getOwnPropertyDescriptor(map, prop);
  },
  has(target, prop) {
    const map = isAichiBranch() ? AICHI_STORE_COLORS : KANAGAWA_STORE_COLORS;
    return prop in map;
  }
});

// ソート順マップ（愛知支社版では愛知15営業所のみ、神奈川支社版では神奈川7店舗のみ）
export const STORE_ORDER: Record<string, number> = new Proxy({} as Record<string, number>, {
  get(target, prop, receiver) {
    const map = isAichiBranch() ? AICHI_STORE_ORDER : KANAGAWA_STORE_ORDER;
    return (map as any)[prop];
  },
  ownKeys(target) {
    const map = isAichiBranch() ? AICHI_STORE_ORDER : KANAGAWA_STORE_ORDER;
    return Reflect.ownKeys(map);
  },
  getOwnPropertyDescriptor(target, prop) {
    const map = isAichiBranch() ? AICHI_STORE_ORDER : KANAGAWA_STORE_ORDER;
    return Reflect.getOwnPropertyDescriptor(map, prop);
  },
  has(target, prop) {
    const map = isAichiBranch() ? AICHI_STORE_ORDER : KANAGAWA_STORE_ORDER;
    return prop in map;
  }
});

// デフォルト拠点（愛知支社版: 熱田営業所 / 神奈川支社版: 横浜店）
export const DEFAULT_OFFICE_LOCATION: StoreLocation = new Proxy({} as StoreLocation, {
  get(target, prop, receiver) {
    const def = isAichiBranch()
      ? AICHI_STORE_LOCATIONS['熱田営業所']
      : KANAGAWA_STORE_LOCATIONS['横浜店'];
    return (def as any)[prop];
  }
});

// デフォルト拠点名
export const getDefaultStoreName = (): string => {
  return isAichiBranch() ? '熱田営業所' : '横浜店';
};

export const APP_VERSION = '2.2.5';
