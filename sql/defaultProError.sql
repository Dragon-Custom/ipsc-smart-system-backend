--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-25 20:08:40

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
-- TOC entry 224 (class 1259 OID 161777)
-- Name: ProErrorObjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProErrorObjects" (
    id integer NOT NULL,
    index text NOT NULL,
    title text NOT NULL,
    description text NOT NULL
);


ALTER TABLE public."ProErrorObjects" OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 161957)
-- Name: proerrorobjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proerrorobjects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proerrorobjects_id_seq OWNER TO postgres;

--
-- TOC entry 4845 (class 0 OID 0)
-- Dependencies: 231
-- Name: proerrorobjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proerrorobjects_id_seq OWNED BY public."ProErrorObjects".id;


--
-- TOC entry 4689 (class 2604 OID 161958)
-- Name: ProErrorObjects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProErrorObjects" ALTER COLUMN id SET DEFAULT nextval('public.proerrorobjects_id_seq'::regclass);


--
-- TOC entry 4838 (class 0 OID 161777)
-- Dependencies: 224
-- Data for Name: ProErrorObjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProErrorObjects" (id, index, title, description) FROM stdin;
1	"10.2.1"	"Fault line 外射擊"	"如參賽者於射擊時身體任何部份接觸阻隔線以外的地面或任何物品，每次判罰一個程序性 犯規。如參賽者觸犯上述情況但沒有射擊，不可判罰程序性犯規，引用賽例2.2.1.5時除外。"
2	"10.2.2"	"不能符合書面賽程簡報上列明的指定動作"	" 如參賽者不能符合書面賽程簡報上列明的指定動作，每次犯規判罰一個程序性犯規。然而， 如參賽者因此犯規行為而獲得顯著的競賽優勢，每次射擊判罰一個程序性犯規，代替一次性判罰 (例如：未有依照賽程簡報在指定地方、位置或姿勢射擊。)。"
3	"10.2.4"	"沒有覆行指定的換匣動作"	"如參賽者沒有覆行指定的換匣動作，之後的每次射擊判罰一個程序性犯規，直至更換彈匣為止。"
4	"10.2.5"	"在’礦工隧道’中，如參賽者碰撞上方一件或多件物料並導致物料掉落。"	"在’礦工隧道’中，如參賽者碰撞上方一件或多件物料並導致物料掉落，每件掉落物料判罰 一個程序性犯規。如參賽者碰撞支架，或因鎗口氣體或滑架回膛而令上方物料掉落，不會判罰程序性犯規。 "
5	"10.2.6"	"偷步"	"如參賽者在’Standby’ 口令與開始訊號之間做出偷步動作(例如：手郁動至鎗枝，換匣裝置 或投射物)或實際移動至任何有利射擊位置，判罰一個程序性犯規。如RO能及時停止參賽者，第 一次干犯判罰警告及指令參賽者重新開始。"
6	"10.2.7"	"沒有射擊任何計分標靶最少一鎗"	"如參賽者沒有射擊任何計分標靶最少一鎗，每個標靶判罰一個程序性犯規，再加應有的 Miss 判罰，賽例9.9.2規定情況除外。"
7	"10.2.8"	"不使用指定手進行射擊"	"如賽程(或其中一部份)指定使用強或弱手射擊，參賽者於開始訊號後(或於某一位置指定使用單手射擊後)使用另一隻手接觸鎗枝(或在枱上挑起鎗枝等。)，每次判罰一個程序性犯規。在開啟外置安全掣(不在挑起鎗枝時)，換匣或維修失靈鎗枝可以豁免判罰。然而，參賽者使用另一隻手作出以下情況，判罰以”每發” 計算的程序性犯規 當射擊時，承托鎗枝或指定手，手臂或手腕 \\n 當射擊時，以地面，屏障或其他平台增加穩定性。"
8	"10.2.11"	"越過1.8米障礙物射擊"	"如參賽者在  1.8米的障礙物之上射擊，判罰每鎗一個程序性犯規(見賽例2.2.3.1)。"
\.


--
-- TOC entry 4846 (class 0 OID 0)
-- Dependencies: 231
-- Name: proerrorobjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proerrorobjects_id_seq', 1, false);


--
-- TOC entry 4693 (class 2606 OID 161783)
-- Name: ProErrorObjects ProErrorObjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProErrorObjects"
    ADD CONSTRAINT "ProErrorObjects_pkey" PRIMARY KEY (id);


--
-- TOC entry 4690 (class 1259 OID 161794)
-- Name: ProErrorObjects_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ProErrorObjects_id_key" ON public."ProErrorObjects" USING btree (id);


--
-- TOC entry 4691 (class 1259 OID 161795)
-- Name: ProErrorObjects_index_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ProErrorObjects_index_key" ON public."ProErrorObjects" USING btree (index);


-- Completed on 2024-04-25 20:08:40

--
-- PostgreSQL database dump complete
--

