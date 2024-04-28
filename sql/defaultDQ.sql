--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-25 20:08:05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 236 (class 1259 OID 162020)
-- Name: DqObjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."DqObjects" (
    id integer NOT NULL,
    index text NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    category text NOT NULL
);


ALTER TABLE public."DqObjects" OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 162019)
-- Name: DqObjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."DqObjects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."DqObjects_id_seq" OWNER TO postgres;

--
-- TOC entry 4845 (class 0 OID 0)
-- Dependencies: 235
-- Name: DqObjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."DqObjects_id_seq" OWNED BY public."DqObjects".id;


--
-- TOC entry 4689 (class 2604 OID 162023)
-- Name: DqObjects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DqObjects" ALTER COLUMN id SET DEFAULT nextval('public."DqObjects_id_seq"'::regclass);


--
-- TOC entry 4839 (class 0 OID 162020)
-- Dependencies: 236
-- Data for Name: DqObjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."DqObjects" (id, index, title, description, category) FROM stdin;
1	10.4.1	向不安全的方向射擊	投射物射越後擋彈坡、護堤或主辦單位在書面賽程簡報中釐定為不安全的方向。注意如參 賽者合理地射擊標靶，但投射物射向不安全方向，不可判取消參賽資格，但可引用賽例2.3修正 賽程。	意外走火
2	10.4.2	向3米內的地面射擊	投射物擊中離參賽者3米內地面（射擊設置於3米內的紙靶除外）。因沒有足夠推動投射 物氣體而導致投射物擊落於離參賽者3米內地面的情况豁免引用此賽例。	意外走火
4	10.4.3	上匣，換匣，卸匣時走火	鎗枝上匣，換匣，卸匣時射出投射物。此情況包括任何於賽例8.3.1至8.3.7所列出動作中 發生的響鎗(亦見賽例10.5.10)。	意外走火
5	10.4.4	維修時走火	維修故障鎗枝時射出投射物。	意外走火
6	10.4.5	換手時走火	換手持鎗時鎗枝射出投射物。	意外走火
7	10.4.6	移動時走火	移動時鎗枝射出投射物，射擊標靶時除外。	意外走火
8	10.4.7	在不安全距離射擊剛性物料靶	在不安全距離（2米）射擊剛性物料靶(見賽例2.1.3)。	意外走火
9	10.5.2	槍口指向超過180度	鎗口指向超過賽程容許或指定的安全射擊角度，(有限制的豁免:見賽例 2.1.2.1， 5.2.7.3 及 10.5.7)。	不安全使用鎗枝
11	10.5.3	掉鎗	參賽者在賽程進行中任何時間掉下鎗枝或導致鎗枝掉下(不論鎗枝有否入匣)。如參賽者因任何理由，在賽程進行中有意識及安全地將鎗枝放於地上或其他牢固物件上不能判取消參賽資格，例如：\\n參賽者仍然緊持鎗枝直至鎗枝穩固和安全地放於地上或其他牢固物件上，\\n參賽者在任何時間均保持鎗枝在自身1米範圍內(鎗枝在RO監督下放於遠處作開始準備情況除外)，\\n不干犯賽例10.5.2規定，\\n鎗枝按賽例8.1規定的準備狀態下，\\n鎗枝在未有上匣的狀態及滑架於後定位置。	不安全使用鎗枝
12	10.5.4	隧道內拔鎗或Holster	在隧道範圍內拔鎗或將鎗枝放回鎗套。	不安全使用鎗枝
13	10.5.5	槍口指向身體	鎗口在賽程進行中指向身體任何部分。參賽者於拔鎗和把鎗枝放回鎗套時指向身體部分或 依賽例8.3.6.1清空鎗膛，但扣板機的手指明顯移離扳機護環，不可判取消參賽資格。	不安全使用鎗枝
14	10.5.6	鎗口指向其他人	於賽程時鎗枝鎗口指向其他人(例如比賽工作人員或觀眾)身體任何部位。不適用於參賽者 已遵從賽例8.5.6，於賽程期間任何意外出現於賽程射擊範圍內人士的情況。	不安全使用鎗枝
15	10.5.7	鎗枝鎗口指向超越參賽者脚下後 方半徑1米	於拔鎗和把鎗枝放回鎗套時，已上膛/入匣(裝有投射物)的鎗枝鎗口指向超越參賽者脚下後 方半徑1米。此1米寬限僅適用於參賽者正面面對射擊場。	不安全使用鎗枝
16	10.5.8	進行賽程時佩帶或使用多於一把鎗枝。	進行賽程時佩帶或使用多於一把鎗枝。	不安全使用鎗枝
17	10.5.9	維修時，槍支移離標靶時手指在護環內	參賽者鎗枝明顯移離標靶進行維修時，扣板機的手指仍放於板機護環內。	不安全使用鎗枝
18	10.5.10	上匣、換匣、或卸匣時，手指在護環內	在上匣、換匣、或卸匣時，扣板機的手指仍放於板機護環內，特別情況允許除外(見賽 例 8.1.2.5，8.3.7.1 及 8.7.1)。	不安全使用鎗枝
19	10.5.11	移動時，手指在護環內	跟據賽例8.5.1，移動時扣板機的手指仍放於板機護環內。	不安全使用鎗枝
21	10.5.12	在槍套內的已上膛的槍支沒有啟動安全掣	在下列任何情況下，已上膛/入匣(裝有投射物)的鎗枝放於鎗套內：\\n單動作半自動鎗枝已上膛，但沒有啟動安全掣。\\n雙動作或選擇式半自動鎗枝已拉起擊鎚，但沒有啟動安全掣。	不安全使用鎗枝
22	10.5.13	在安全區內手持投射物或任何裝有壓縮氣體的東西	在安全區內手持投射物或任何裝有壓縮氣體的東西，違反賽例2.4.4。	不安全使用鎗枝
24	10.5.14	自行擁有已上膛/入匣的槍支	未有 RO的授權下擁有已上膛/入匣(裝有投射物)的鎗枝。	不安全使用鎗枝
25	10.5.15	拾起掉倒地上鎗枝	拾起掉倒地上鎗枝。掉倒地上鎗枝必須經由RO拾起，在檢查和/或清空鎗枝後，直接放回參賽者的鎗盒、鎗袋或鎗套。在賽程進行以外時間，掉下未有入匣的鎗枝或導致鎗枝掉下不會判罰取消參賽資格。然而，如參賽者自行拾回掉下的鎗枝將被判罰取消參賽資格。	不安全使用鎗枝
26	10.5.16	使用非法的投射物或槍支	使用被禁止和/或不安全的投射物(見賽例5.5.4，5.5.6及5.6.1)，和/或使用被禁止的鎗枝(見 賽例5.1.10及5.1.11)。	不安全使用鎗枝
27	10.6.1	參賽者做出違背體育精神行為	RO 可基於參賽者做出違背體育精神行為時判罰取消參賽資格。例子包括，但不只限於：作弊、不誠實、不服從比賽工作人員合理的指示，或做出任何玷污比賽的行為。必須盡快向RM報告。	違背體育精神行為
28	10.6.2	故意使護目鏡脫下	如 RO認為參賽者故意脫下或導致護目鏡脫下，從而希望獲得重賽或得益，會判罰該參賽者取消參賽資格。	違背體育精神行為
29	10.6.3	在場人仕做出不可接受的行為	如 RO認為任何在場人仕做出不可接受的行為時，可將該等人仕驅逐離場。不可接受的行為包括，但不只限於：不服從比賽工作人員合理的指示、干擾比賽運作和/或參賽者作賽，及做出任何玷污比賽的行為。	違背體育精神行為
30	10.7.2	參賽者濫用酒精製品、禁藥或藥物	IPSC 嚴禁參賽者濫用酒精製品、非處方和不必要的藥物及服用禁藥或增强身體機能的藥物，不論如何使用或管有，皆為嚴重違規的行為。	嚴禁使用的物品
31	10.7.3	參賽者受藥物作用影響	在 IPSC比賽中，除醫藥用途外，參賽者及工作人員均不能受任何藥物(包括洒精製品)影響。如RM認為任何人仕明顯受上述物品影響，將判罰取消參賽資格及有權將該等人仕驅逐離場。	嚴禁使用的物品
\.


--
-- TOC entry 4846 (class 0 OID 0)
-- Dependencies: 235
-- Name: DqObjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."DqObjects_id_seq"', 1, false);


--
-- TOC entry 4693 (class 2606 OID 162027)
-- Name: DqObjects DqObjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DqObjects"
    ADD CONSTRAINT "DqObjects_pkey" PRIMARY KEY (id);


--
-- TOC entry 4690 (class 1259 OID 162028)
-- Name: DqObjects_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "DqObjects_id_key" ON public."DqObjects" USING btree (id);


--
-- TOC entry 4691 (class 1259 OID 162029)
-- Name: DqObjects_index_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "DqObjects_index_key" ON public."DqObjects" USING btree (index);


-- Completed on 2024-04-25 20:08:05

--
-- PostgreSQL database dump complete
--

