'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft,
    Download,
    LayoutDashboard,
    Maximize2,
    Pin,
    Building2,
    Users,
    Smartphone,
    Layers,
    SlidersHorizontal,
    Sparkles,
    Calendar,
    Clock,
    FileText,
    MoveRight,
    CheckCircle2,
    HelpCircle,
    Info,
    CalendarCheck,
    BookmarkCheck,
    RotateCcw,
    ShieldCheck,
    Lock,
    Unlock,
    Map
} from 'lucide-react';

export default function UserGuidePage() {
    return (
        <div className="container mx-auto py-8 px-4 max-w-5xl space-y-10">
            {/* ナビゲーションバー */}
            <div className="flex items-center justify-between">
                <Button asChild variant="ghost" className="pl-0 gap-2">
                    <Link href="/manuals">
                        <ArrowLeft className="h-4 w-4" />
                        マニュアル一覧に戻る
                    </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href="/user_manual.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                        PDF版をダウンロード
                    </a>
                </Button>
            </div>

            {/* 表紙・タイトルセクション */}
            <div className="border-b pb-6 space-y-3">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <LayoutDashboard className="h-4 w-4" />
                    管理者向け 総合操作ガイド (完全図解版)
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    WorkWise ユーザー総合操作マニュアル
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    本マニュアルは、管理者の皆様がWorkWiseを使って、<strong>「注文の受付・登録」から「未割当タスクの確認」「タイムラインへの受注割当（ドラッグ＆ドロップ）」「担当変更時のタスク確認自動リセット」「汎用タスクの作成者自動記録」「スマホ横画面での誤操作防止」まで、最初から順番に迷わず操作できるように全画面スクリーンショット付きで解説した完全版ガイド</strong>です。
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="secondary" className="text-xs font-normal">🖥️ PC・タブレット対応</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">⏱️ 終了予定・所要時間連動</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">🔄 担当変更時リセット(v2.2.3)</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">✍️ 汎用タスク自動記録(v2.2.4)</Badge>
                    <Badge variant="secondary" className="text-xs font-normal">🔒 スマホ横画面移動ロック(v2.2.5)</Badge>
                </div>
            </div>

            {/* 目次クイックナビゲーション */}
            <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200">
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                        <BookmarkCheck className="h-4 w-4 text-blue-600" />
                        マニュアル目次（クリックすると該当箇所へジャンプします）
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <a href="#section-1" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5">
                        <span className="font-bold text-foreground">1.</span> ダッシュボードの全体画面と見方
                    </a>
                    <a href="#section-2" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5">
                        <span className="font-bold text-foreground">2.</span> 受注フォームからの注文登録手順
                    </a>
                    <a href="#section-3" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5">
                        <span className="font-bold text-foreground">3.</span> 未割当プールと動的チップ幅の確認
                    </a>
                    <a href="#section-4" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5">
                        <span className="font-bold text-foreground">4.</span> タイムラインへの受注割当（ドラッグ＆ドロップ）
                    </a>
                    <a href="#section-5" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                        <span className="font-bold text-foreground">5.</span> 【新機能】担当変更時のタスク確認自動リセット
                    </a>
                    <a href="#section-6" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                        <span className="font-bold text-foreground">6.</span> 【新機能】汎用タスクの配置と入力者・日時自動記録
                    </a>
                    <a href="#section-7" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                        <span className="font-bold text-foreground">7.</span> 【新機能】カレンダー日付選択の均等整列
                    </a>
                    <a href="#section-8" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
                        <span className="font-bold text-foreground">8.</span> 【新機能】スマホ横画面表示時のチップ誤操作防止
                    </a>
                    <a href="#section-9" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5">
                        <span className="font-bold text-foreground">9.</span> 突発応援時の「1日限定」拠点変更
                    </a>
                    <a href="#section-10" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5">
                        <span className="font-bold text-foreground">10.</span> ルート最適化と当日出勤スタッフの地図表示
                    </a>
                    <a href="#section-11" className="p-1.5 hover:text-primary transition-colors flex items-center gap-1.5 sm:col-span-2">
                        <span className="font-bold text-foreground">11.</span> その他の便利機能（固定ヘッダー・全幅表示）
                    </a>
                </CardContent>
            </Card>

            {/* 第1章: ダッシュボード全体画面と見方 */}
            <section id="section-1" className="space-y-4 pt-2">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <h2 className="text-xl sm:text-2xl font-bold">1. ダッシュボードの全体画面と見方</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">スケジュール・受注割当の中心となるダッシュボード画面</CardTitle>
                        <CardDescription>
                            ログイン後に表示されるメイン画面です。当日のスケジュール、スタッフの配置、未割当の注文が一目で確認できます。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/pc-1-dashboard-overview.png"
                                alt="ダッシュボード全体画面"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 1-1】ダッシュボード全体画面（上部ナビ・未割当タスク・タイムライン）
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-3 pt-2">
                            <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 space-y-1">
                                <div className="font-bold text-blue-900 text-xs flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5 text-blue-600" />
                                    ① 日付操作バー
                                </div>
                                <p className="text-[11px] text-slate-600 leading-relaxed">
                                    左右の矢印やカレンダーボタンで日付を自由に切り替えます。「今日」を押すと瞬時に当日に戻ります。
                                </p>
                            </div>
                            <div className="p-3 rounded-lg bg-indigo-50/50 border border-indigo-100 space-y-1">
                                <div className="font-bold text-indigo-900 text-xs flex items-center gap-1">
                                    <Layers className="h-3.5 w-3.5 text-indigo-600" />
                                    ② 本日の受注タスク（未割当）
                                </div>
                                <p className="text-[11px] text-slate-600 leading-relaxed">
                                    まだスタッフに割り当てられていない注文がチップとして並びます。青色のチップをドラッグして割当を行います。
                                </p>
                            </div>
                            <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 space-y-1">
                                <div className="font-bold text-emerald-900 text-xs flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                                    ③ タイムライン
                                </div>
                                <p className="text-[11px] text-slate-600 leading-relaxed">
                                    スタッフごとの1日のスケジュール（9:00〜19:00）を表示します。10:00〜17:00には縦目盛り線が引かれています。
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第2章: 受注フォームからの注文登録手順 */}
            <section id="section-2" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <h2 className="text-xl sm:text-2xl font-bold">2. 受注フォームからの注文登録手順</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Badge className="bg-blue-600 text-white text-xs">基本機能</Badge>
                            <CardTitle className="text-lg">タイヤ作業 ご注文フォーム (`/order-form`)</CardTitle>
                        </div>
                        <CardDescription>
                            販売店様からの依頼や電話受付の注文を入力します。ダッシュボード上部の「フォームを開く」ボタンからワンクリックで開けます。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/pc-3-order-form.png"
                                alt="タイヤ作業 ご注文フォーム画面"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 2-1】受注フォーム画面（予定開始時間と予定終了時間の入力欄）
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 space-y-3">
                            <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                入力の手順とポイント
                            </h4>
                            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                <li>
                                    <strong>ユーザーコード（5桁）</strong>：販売店コードを入力すると、店舗名が自動補完されます。
                                </li>
                                <li>
                                    <strong>作業区分・フォーム入力者</strong>：該当する作業区分（販売店店舗内作業など）と入力者名を選択・入力します。「その他」を選択した場合は詳細欄が表示されます。
                                </li>
                                <li>
                                    <strong>作業予定日・予定開始時間</strong>：作業予定の日付と、開始予定時刻（例: <code>13:30</code>）を入力します。
                                </li>
                                <li>
                                    <strong className="text-blue-600 dark:text-blue-400">★ 予定終了時間（任意 / 自動計算対応）</strong>：
                                    作業の終了予定時刻（例: <code>15:00</code>）を入力します。
                                    <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-950/40 rounded border border-blue-200 text-xs text-blue-900 dark:text-blue-300">
                                        💡 <strong>自動計算の仕組み</strong>:
                                        開始「13:30」・終了「15:00」と入力すると、システムが自動的に<strong>「所要時間90分」</strong>と判定し、タイムラインにも正確な90分の幅でチップが作られます。<br />
                                        ※終了予定時間を空欄のまま送信した場合は、従来通り自動的に「1時間（60分）枠」として登録されます。
                                    </div>
                                </li>
                                <li>
                                    <strong>車両・タイヤ情報</strong>：車名、登録ナンバー（下4桁）、タイヤサイズ・本数を入力し、「送信」ボタンを押します。
                                </li>
                            </ol>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第3章: 未割当プールと動的チップ幅の確認 */}
            <section id="section-3" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <h2 className="text-xl sm:text-2xl font-bold">3. 未割当プールと動的チップ幅の確認</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">所要時間に連動した「未割当タスクチップ」</CardTitle>
                        <CardDescription>
                            フォームから送信された注文は、即座にダッシュボード左上の「本日の受注タスク」エリアに青いチップとして届きます。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/pc-4-unassigned-pool.png"
                                alt="未割当タスクプール"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 3-1】未割当タスクプール（90分枠と60分枠のチップ幅の違いが視覚的に一目で分かります）
                            </div>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            <p>
                                • <strong>チップの幅（長さ）</strong>：終了予定時刻から算出された所要時間に応じて、チップ自体の横幅が自動的に伸縮します（上記画像では、左の90分枠が、右の60分枠よりも横長に表示されています）。
                            </p>
                            <p>
                                • <strong>時間帯の明記</strong>：チップ上に「13:30-15:00」のように開始〜終了の予定時刻が明確に印字されるため、割当前に作業時間枠を確認できます。
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第4章: タイムラインへの受注割当（ドラッグ＆ドロップ） */}
            <section id="section-4" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <h2 className="text-xl sm:text-2xl font-bold">4. タイムラインへの受注割当（ドラッグ＆ドロップ）</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">直感的なマウスドラッグによる受注割当</CardTitle>
                        <CardDescription>
                            未割当プールにあるチップを、担当させたいスタッフの行へドラッグ＆ドロップするだけで受注割当が完了します。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/pc-5-timeline-assigned-chips.png"
                                alt="タイムラインへのチップ配置状態と完了タスクのグレーアウト表示"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 4-1】タイムラインへの受注割当と完了タスクのグレーアウト表示（完了した案件は濃いグレーになり、残りの色付きタスクが一目で把握可能）
                            </div>
                        </div>

                        <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            <div className="flex items-start gap-2">
                                <div className="p-1 rounded bg-blue-100 text-blue-700 font-bold shrink-0 text-xs">STEP 1</div>
                                <p>
                                    未割当プールのチップをクリックしたまま、担当スタッフの行の希望時間（例: 13:30）へドラッグします。
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="p-1 rounded bg-blue-100 text-blue-700 font-bold shrink-0 text-xs">STEP 2</div>
                                <p>
                                    ドロップすると、作業チップの手前に<strong>自動的に「移動（30分）」チップが生成</strong>され、作業チップも<strong>フォームで指定した正確な枠（例: 13:30〜15:00の90分枠）</strong>でタイムラインに配置されます。
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="p-1 rounded bg-blue-100 text-blue-700 font-bold shrink-0 text-xs">STEP 3</div>
                                <p>
                                    配置した瞬間、バックエンドデータベース（Firestore）およびバックアップ用スプレッドシート（受注管理WW3）へ<strong>きれいに1行のみ自動同期</strong>され、重複なく安全に保存されます。
                                </p>
                            </div>
                        </div>

                        {/* 完了タスクのグレーアウトと進捗可視化 */}
                        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 space-y-3 mt-4">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                    【進捗が一目瞭然】完了タスクの自動グレーアウト機能
                                </h4>
                                <Badge variant="outline" className="text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border-slate-300 text-[10px]">
                                    視覚的進捗管理
                                </Badge>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                タイムライン上の受注チップは、通常は各スタッフの<strong>担当カラー（スタッフ色）</strong>で鮮やかに表示されています。現場スタッフが作業を完了（または管理者が作業完了を打刻）すると、チップの表示が自動的に切り替わります：
                            </p>
                            <div className="grid sm:grid-cols-2 gap-3 text-xs">
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 space-y-1">
                                    <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
                                        <div className="w-3.5 h-3.5 rounded bg-slate-600"></div>
                                        完了タスク：落ち着いた濃いグレー（済マーク付）
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        作業完了となったチップは、スタッフ色から<strong>落ち着いたチャコールグレー（Slate-700）へ自動でグレーアウト</strong>し、左上に赤丸の<strong>「済」</strong>スタンプが付与されます。
                                    </p>
                                </div>
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 space-y-1">
                                    <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-300">
                                        <div className="w-3.5 h-3.5 rounded bg-blue-500"></div>
                                        残タスク：鮮やかなスタッフ固有カラー
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        まだ完了していない案件だけが<strong>鮮やかな色付き</strong>のまま残るため、パッとタイムラインを見るだけで<strong>「今日残っているタスクがどれくらいあるか」が一目で直感的に把握</strong>できます。
                                    </p>
                                </div>
                            </div>
                            <div className="p-2.5 bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                                💡 <strong>管理者のメリット</strong>: 夕方や業務途中の忙しい時間帯でも、現場に電話で確認することなく「誰のどこにまだ作業が残っているか」「チーム全体の進捗が何割完了しているか」を瞬時に判断できます。
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第5章: 担当変更時のタスク確認自動リセット仕様 */}
            <section id="section-5" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-indigo-600 pl-3">
                    <Badge className="bg-indigo-600 text-white text-xs">v2.2.3新機能</Badge>
                    <h2 className="text-xl sm:text-2xl font-bold">5. 担当変更時のタスク確認自動リセット仕様</h2>
                </div>
                <Card className="shadow-xs border-indigo-200 bg-gradient-to-b from-white to-indigo-50/20">
                    <CardHeader>
                        <CardTitle className="text-lg">担当の変更（受注の再割当）に完全連動した安全再確認設計</CardTitle>
                        <CardDescription>
                            現場スタッフAが「タスク確認」を押した後に、管理者がスタッフBへチップを張り替えた際、Aの確認状態が自動クリアされ、Bが確実に再確認できる仕組みです。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/timeline-task-confirmed-badge.png"
                                alt="タイムライン上の青い「確」マーク表示"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 5-1】タイムライン上のチップ左上に表示される青い「確」マーク（現場確認済みの目印）
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 space-y-3">
                            <h4 className="font-bold text-sm text-indigo-950 dark:text-indigo-300 flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-indigo-600" />
                                担当張り替え時の自動リセット連動フロー
                            </h4>
                            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                <div className="flex items-start gap-2">
                                    <div className="p-1 rounded bg-indigo-100 text-indigo-700 font-bold shrink-0 text-xs">1</div>
                                    <p>
                                        <strong>現場の確認状況がチップで一目瞭然</strong>：現場スタッフがスマホで「タスク確認」ボタンを押すと、タイムライン上のチップ左上に青色の丸い<strong>「確」マーク</strong>が点灯します。
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="p-1 rounded bg-indigo-100 text-indigo-700 font-bold shrink-0 text-xs">2</div>
                                    <p>
                                        <strong>チップの張り替えで自動リセット</strong>：急な予定変更で管理者がチップをスタッフAからスタッフBの行へドラッグ移動すると、<strong>スタッフAのタスク確認状態が自動消去</strong>され、「確」マークも即座に消えます。
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="p-1 rounded bg-indigo-100 text-indigo-700 font-bold shrink-0 text-xs">3</div>
                                    <p>
                                        <strong>新担当者のスマホに「タスク確認」が再表示</strong>：新担当者（スタッフB）のスマホ画面では「確認済み」ではなく青い<strong>「タスク確認」ボタン</strong>が表示されるため、スタッフBが自分のタスクとして確実に確認できます。
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="p-1 rounded bg-indigo-100 text-indigo-700 font-bold shrink-0 text-xs">4</div>
                                    <p>
                                        <strong>未割当戻し・テーブル編集時も連動</strong>：チップを未割当プールに戻した場合や、受注一覧テーブルのダイアログから担当者を変更した場合も、同様に自動リセットされます。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第6章: 汎用タスクの配置と入力者・日時自動記録 */}
            <section id="section-6" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <Badge className="bg-blue-600 text-white text-xs">v2.2.4新機能</Badge>
                    <h2 className="text-xl sm:text-2xl font-bold">6. 汎用タスクの配置と入力者・日時自動記録</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">業務・休憩・研修などの登録と履歴追跡</CardTitle>
                        <CardDescription>
                            受注以外の業務（移動、業務、休憩、研修、同行、商談、会議）をチップとして配置できます。誰がいつ作成・移動したかが自動保存されます。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                                <img
                                    src="/images/manual/generic-tasks-pool-and-timeline.png"
                                    alt="汎用タスクプールとタイムライン"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-2 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                    【図 6-1】汎用タスクプール（休憩、業務、研修などのカラーチップ）
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                                <img
                                    src="/images/manual/task-detail-submitter-timestamp.png"
                                    alt="受注詳細ダイアログの入力者と日時"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-2 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                    【図 6-2】詳細ダイアログ（フォーム入力者・受注日時の自動記録）
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 space-y-3">
                            <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                汎用タスクの自動記録仕様
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                <li>
                                    • <strong>新規作成者の自動入力</strong>：汎用タスク（休憩、商談、研修、同行、業務、会議等）のチップをタイムライン上に貼り付けた際、操作を行っているログイン者の氏名（例: <code>桑原</code>）が「フォーム入力者」として自動記録され、貼り付け日時が「受注日時」にタイムスタンプとして記録されます。
                                </li>
                                <li>
                                    • <strong>チップ移動時の自動更新</strong>：後から別の管理者やスタッフがその汎用チップを別の時間やスタッフへ移動（更新）した場合、<strong>移動操作を行ったログイン者の氏名で「フォーム入力者」が自動更新</strong>され、「受注日時」にも移動日時のタイムスタンプが最新の日時で再記録されます。
                                </li>
                                <li>
                                    • <strong>ツールチップでの即時確認</strong>：タイムライン上のチップにマウスカーソルを合わせる（ホバーする）だけで入力者名と受注日時が確認できるほか、チップをダブルクリックして開く詳細ダイアログでも確認できます。
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第7章: カレンダー日付選択の整列機能 */}
            <section id="section-7" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <Badge className="bg-blue-600 text-white text-xs">v2.2.4新機能</Badge>
                    <h2 className="text-xl sm:text-2xl font-bold">7. カレンダー日付選択の整列機能</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">曜日ヘッダーと日付セルが美しく均等配置</CardTitle>
                        <CardDescription>
                            ダッシュボード上部の日付選択カレンダーにおいて、曜日（日〜土）の真下に各日付セルが整然と中央揃えで配置されます。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="max-w-md mx-auto rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/calendar-date-picker-grid.png"
                                alt="カレンダーの曜日と日付整列"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 7-1】カレンダーポップオーバー（各曜日の真下に日付と件数バッジが整列）
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
                            日付セルには当日の受注件数（例: <code>18件</code>）がバッジ表示され、件数が多い日も一目で把握できます。
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* 第8章: スマホ横画面表示時のチップ誤操作防止 */}
            <section id="section-8" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
                    <Badge className="bg-amber-500 text-white text-xs">v2.2.5最新機能</Badge>
                    <h2 className="text-xl sm:text-2xl font-bold">8. スマホ横画面表示時のチップ誤操作防止</h2>
                </div>
                <Card className="shadow-xs border-amber-200 bg-gradient-to-b from-white to-amber-50/20">
                    <CardHeader>
                        <CardTitle className="text-lg">移動自動ロック＆画面スワイプ優先の安全設計</CardTitle>
                        <CardDescription>
                            スマートフォンを横画面にしてタイムラインを表示した際、指でスクロールしようとして誤ってチップを動かしてしまう事故を完全に防止します。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/mobile-landscape-drag-lock.png"
                                alt="スマホ横画面表示時のチップ誤操作防止バナーとタイムライン"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 8-1】スマホ横画面表示時の画面構成（上部バナーでロック中を明示、スワイプ優先）
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 space-y-3">
                            <h4 className="font-bold text-sm text-amber-950 dark:text-amber-300 flex items-center gap-2">
                                <Lock className="h-4 w-4 text-amber-600" />
                                誤操作防止の3大ポイント
                            </h4>
                            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                <div className="flex items-start gap-2">
                                    <div className="p-1 rounded bg-amber-100 text-amber-800 font-bold shrink-0 text-xs">POINT 1</div>
                                    <p>
                                        <strong>初期状態で自動ロック</strong>：スマホからPCダッシュボードを表示すると、自動でドラッグ＆ドロップ移動が無効化されます。未割当プール・汎用タスク・タイムライン上の全チップが安全に保護されます。
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="p-1 rounded bg-amber-100 text-amber-800 font-bold shrink-0 text-xs">POINT 2</div>
                                    <p>
                                        <strong>滑らかなスワイプスクロール</strong>：指がチップの上に触れた状態で左右・上下にスワイプしてもチップは掴まれず、タイムライン全体のスクロールが最優先されます。
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="p-1 rounded bg-amber-100 text-amber-800 font-bold shrink-0 text-xs">POINT 3</div>
                                    <p>
                                        <strong>「移動ロック解除」トグルボタン</strong>：万が一外出先からチップを動かしたい場合は、上部バナー右側の<strong>「🔓 移動ロック解除」</strong>ボタンを押せば一時的にドラッグ操作が可能になります（用が済んだら再度ロック可能）。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第9章: 突発応援時の「1日限定」拠点変更 */}
            <section id="section-9" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-emerald-600 pl-3">
                    <Badge className="bg-emerald-600 text-white text-xs">柔軟運用</Badge>
                    <h2 className="text-xl sm:text-2xl font-bold">9. 突発応援時の「1日限定」拠点変更</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">スタッフ名横の「拠点」プルダウン即時切替</CardTitle>
                        <CardDescription>
                            「急遽、本日だけ厚木店のスタッフを横浜店に応援に行かせたい」といった突発的な他店舗常駐・応援にその場で対応できます。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/pc-2-timeline-store-dropdown.png"
                                alt="タイムライン拠点列とプルダウンメニュー"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 9-1】タイムラインの拠点列（プルダウンで各店舗を即時選択可能）
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 space-y-3">
                            <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-emerald-600" />
                                1日限定オーバーライドの安心設計
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                <li>
                                    • <strong>基本母店は保護</strong>：スタッフマスタに登録されている本来の母店（厚木店など）は書き換わりません。
                                </li>
                                <li>
                                    • <strong>その日限定で保持</strong>：表示中の日付（例: 10月21日）でプルダウンを「横浜店」に変更すると、10月21日限定で横浜店として保存され、スタッフ行の背景色も横浜店カラーに即座に切り替わります。
                                </li>
                                <li>
                                    • <strong>日付が変われば自動復帰</strong>：翌日（10月22日）に日付を切り替えると、自動的に本来の母店（厚木店）に戻って表示されます。再び10月21日に戻れば、設定した「横浜店」がそのまま保持されています。
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第10章: ルート最適化と当日出勤スタッフの地図表示 */}
            <section id="section-10" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <Badge className="bg-blue-600 text-white text-xs">AI機能</Badge>
                    <h2 className="text-xl sm:text-2xl font-bold">10. ルート最適化と当日出勤スタッフの地図表示</h2>
                </div>
                <Card className="shadow-xs border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">移動効率を最大化するルート最適化 (`/optimizer`)</CardTitle>
                        <CardDescription>
                            出勤中のスタッフの位置・拠点と複数の作業場所間の最も効率的なルートをAIが生成します。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                            <img
                                src="/images/manual/optimizer-staff-route-map.png"
                                alt="ルート最適化画面の地図表示"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-2.5 text-xs text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                【図 10-1】ルート最適化画面（当日出勤中のスタッフのみが地図上にリアルタイム表示）
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            <p>
                                • <strong>当日出勤スタッフのみを表示（v2.2.2改善）</strong>：以前発生していた「本日出勤していないスタッフが地図上に残ってしまう」問題を解消し、当日出勤打刻を行ったスタッフのみが地図上にアイコン表示されます。
                            </p>
                            <p>
                                • <strong>移動時間・距離の最適化</strong>：出発地、目的地、複数の経由地を選択し、「ルートを最適化」を押すだけで、所要時間が最小となる順序を瞬時に割り出します。
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 第11章: その他の便利機能 */}
            <section id="section-11" className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-l-4 border-blue-600 pl-3">
                    <h2 className="text-xl sm:text-2xl font-bold">11. その他の便利機能</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {/* ヘッダー常時固定 */}
                    <Card className="shadow-xs border-slate-200">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                                <Pin className="h-4 w-4 text-purple-600" />
                                <CardTitle className="text-base">ヘッダー行常時固定（Sticky追従）</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                スタッフ数が多い場合でも、縦スクロール時に「スタッフ名・拠点・9:00〜19:00目盛り・ステータス」のヘッダーが画面上辺にピタッと吸着固定されます。下方のスタッフでも時間帯を見失いません。
                            </p>
                            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
                                <img
                                    src="/images/manual/pc-6-timeline-header-sticky.png"
                                    alt="タイムラインヘッダー固定"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-2 text-[11px] text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                    【図 11-1】ヘッダー常時固定（下スクロール時も時間軸・拠点列が上部に追従固定）
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 大画面全幅拡大 */}
                    <Card className="shadow-xs border-slate-200">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                                <Maximize2 className="h-4 w-4 text-blue-600" />
                                <CardTitle className="text-base">大画面モニターでの全幅拡大</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                ワイドモニターや高解像度ディスプレイでも右端に不自然な余白が出ず、画面幅いっぱいにタイムラインが均等拡大されます。事務所の大画面テレビ等での常時監視にも最適です。
                            </p>
                            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
                                <img
                                    src="/images/manual/pc-7-timeline-responsive-fullscreen.png"
                                    alt="全幅拡大表示"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-2 text-[11px] text-muted-foreground text-center bg-slate-100 dark:bg-slate-800 border-t">
                                    【図 11-2】大画面モニター全幅拡大表示（余白なくワイドに全情報が一望可能）
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
