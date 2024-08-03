import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Levente Simon
        </p>
        
      </div>

      <div className="mb-32 grid lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
      <br/>
      <br/>

      <hr/>
    
      <br/>
      <h2>software engineer • mathematician</h2>
      <br/>
      <h2>web development, fractals, network science, education and the intersection of these topics</h2>
      <br/>  <hr/>
    
      <br/>
      <h2>Experience</h2><br/>
        <ul className="list-disc">
        <li>Software engineer, Cognizant, Cluj-Napoca / Romania, 2021- </li>
        <li>Software engineer, Sensilla, Hesperange / Luxembourg, 2021 </li>
        <li>Software engineer, Gnome Design, Sfântu Gheorghe / Romania, 2016-2021 </li>
         </ul>
      <br/>

      <hr/>
    
      <br/>
      <h2>Education</h2>

      <br/>
      <ul className="list-disc">
        <li>Babeș-Bolyai University and Eötvös Loránd Univesity, PhD studies, Cluj-Napoca / Romania, 2014-2017, without obtaining a final degree </li>
        <li>Babeș-Bolyai University, Cluj-Napoca / Romania, 2012-2014, MSc in Computational Mathematics </li>
        <li>Babeș-Bolyai University, Cluj-Napoca / Romania, 2009-2012, BSc in Mathematics and Computer Science</li>
         </ul>
      <br/>
      <hr/>
    
      <br/>
      <h2>Publications</h2>

        <br/>
        <ul className="list-disc">
            <li>Simon Levente, 2021, Fixed point theorem and self-similarity on mixed Vicsek patterns, Miskolc Mathematical Notes, IF2019: 0.677., Vol. 22, No. 2, pp. 977-987 DOI: 10.18514/MMN.2021.3199</li>
            <li>Simon Levente - Soós Anna, 2021, Fixed point limits of self-similar network sequences, Banach Center Publications, Volume 124, 85-93.</li>
            <li>Simon Levente - Soós Anna, 2019, Fractal analysis on the football pitch,
            In: IEEE Proceeding of CSCS22 - 22nd International Conference on Control Systems and Computer Science,  583-585,
            doi: 10.1109/CSCS.2019.00106.</li>
            <li>Simon Levente - Soós Anna, 2018, Fractal analysis on evolving Apollonian networks,
                In: Hudoba Péter (ed.): Proceedings of WSPS-5, Budapest: Section of Mathematical and Information Sciences of
                Association of Hungarian PhD and DLA Students, 41.</li>
            <li>Simon Levente - Soós Anna, 2017, Fixed point theorem on high dimensional Apollonian networks,
                In: Ioan Dumitrache, Adina Magda Florea, Florin Pop, Alexandru Dumitraşcu (ed.):
                IEEE Proceeding of CSCS21 - 21st International Conference on Control Systems and Computer Science, 441-446,
                doi: 10.1109/CSCS.2017.68.</li>
            <li>Simon Levente - Soós Anna, 2017, Fractal dimension algorithms for social networks, In: Hudoba Péter (ed.): Proceedings of WSPS-4,
                Budapest: Section of Mathematical and Information Sciences of Association of Hungarian PhD and DLA Students, 32.</li>
            <li>Simon Levente - Soós Anna, 2016, Limit sets of graph-driven iterated (multi)function systems, Annales Univ. Sci. Budapest.,
                Sec. Comp., 45,  183–198.</li>
            <li>Simon Levente - Soós Anna, 2016, Cantor Type Fixed Sets of Iterated Multifunction Systems Corresponding to Self-Similar Networks,
                Applied Mathematics, 7, 365-374. doi: 10.4236/am.2016.74034.</li>
            <li>Simon Levente - Soós Anna, 2016, Iterated multifunction systems correspoding to self-similar networks, In: Cserép Máté (ed.):
                Proceedings of WSPS-3, Budapest: Section of Mathematical and Information Sciences of Association of
                Hungarian PhD and DLA Students, 27.</li>
        </ul>

        <br/>

        In Hungarian:

        <br/>
        <br/>
        <ul className="list-disc">
            <li>Simon Levente, 2016, Hipergráfok fraktálelemzése: a doboz-lefedési algoritmusoktól a
                többértékű iterált függvényrendszerekig, In: B. Varga Judit (szerk.): Intelligens háló 2016 - Határon túli fiatal kutatók tanulmányai,
                Tatabánya: Edutus Főiskola, 81-88.</li>
            <li>Simon Levente, 2016, Doboz-lefedési gráfalgoritmusok gyorsítása és optimalizálása centralitásfogalmak segítségével,
                In: Ternovácz Bálint (szerk.): Ingenia Hungarica II, Budapest: ELTE Eötvös Collegium, 35-55.</li>
            <li>Simon Levente – Szőcs Endre, 2016, Fraktáltulajdonságok a háromszéki civil szervezetek hálózatában,
                In: Balázs Géza – Kovács László – Szőke Viktória (szerk.): Hálózatkutatás - Hálózatok és (inter)diszciplínák, Budapest:
                Inter-Magyar Szemiotikai Társaság, 204-211.</li>
            <li>Simon Levente, 2015 , Erdős-Rényi hipergráfok fokszámfüggvényeinek fraktálvizsgálata, In: Novák Anikó (szerk.):
                Párhuzamok vonzásában - A Balassi Intézet Márton Áron Szakkollégiuma 2015. évi PhD-konferenciájának tanulmányaiból,
                Budapest: Balassi Intézet Márton Áron Szakkollégiuma, 397-411.</li>
            <li>Simon Levente – Szőcs Endre, 2015, Centrális aktorok a XXIII. RMKT Közgazdász Vándorgyűlés résztvevői struktúrájában,
                Közgazdász Fórum, 18 (1), 73-82.</li>
            <li>Simon Levente, 2015, Társadalmi hálózatok fraktálelemzése a mohó-színezési doboz-lefedési algoritmus segítségével,
                In: Búzás Norbert – Prónay Szabolcs (szerk.): Tudásteremtés és –alkalmazás a modern társadalomban,
                Szeged: Szegedi Tudományegyetem Interdiszciplináris Tudásmenedzsment Kutatóközpont, 121-132.</li>
            <li>Simon Levente, 2015, Valószínűségi gráfok fraktáldimenzió függvényeinek számítógépes közelítése.
                In: Dr. Járai-Szabó Ferenc (szerk): XXXII. Országos Tudományos Diákköri Konferencia – Fizika-, Földtudományok- és
                Matematika szekció - Kivonatkötet, Alkalmazott matematika panel, Kolozsvár, Románia, 413.</li>
            <li>Simon Levente, 2013, A fraktáldimenzió érve a valószínűségi hálózatok egy innovatív algoritmussal való ábrázolása mellett,
                In: Székely Tünde (szerk.): Innováció és kreativitás a tudományban, Kolozsvár: Erdélyi Múzeum-Egyesület –
                Romániai Magyar Doktoranduszok és Fiatal Kutatók Szövetsége, 241-257.</li>
            <li>Simon Levente, 2013, Egy székelyföldi kisrégió civil hálózatának fejlődése,
                In: Balázs Géza – Kovács László – Szőke Viktória (szerk.), Hálózatkutatás – Diszciplínák és metszéspontok,
                Budapest: Inter-Eötvös-Mszt-BOM-SZTE JGYPK, 101-111.</li>
            <li>Simon Levente, 2013, Valószínűségi gráfok fraktáldimenziójának vizsgálata,
                In: IV. Eötvös Konferencia program- és absztraktfüzete, Budapest: ELTE, pp. 55-56. </li>
            <li>Simon Levente, 2012, Háromszéki civil szervezetek hálózata, In: Balázs Géza – Kovács László – Szőke Viktória (szerk.),
                Hálózatkutatás – Interdiszciplináris megközelítések, Budapest: Inter-Mszt-BOM-Eötvös, 136-144. </li>
            <li>Simon Levente, 2012, Tamási Áron hálózatai, In: Balázs Géza – Kovács László – Szőke Viktória (szerk.),
                Hálózatkutatás – Interdiszciplináris megközelítések, Budapest: Inter-Mszt-BOM-Eötvös, 173-177. </li>



          </ul>

    
      <br/>
      <hr/>

    
      <br/>
      <h2>Talks & posters</h2>

      <br/>
      <ul className="list-disc">
                <li>Programmers Week - Cognizant Softvision, online, 2022,
                    Title: Storytelling of the football pitch with data, python and p5js</li>
                <li>Data Stories - Central European University, online, 2021,
                    Title: Interactive visualization: cooperation on the football pitch</li>
                <li>Conferințele Școliilor Doctorale din Consorțiul Universitaria, online, 2020,
                    Title: Coupled fixed point theorem and fractals on mixed patterns, joint work with Anna Soós.</li>
                <li>13th Joint Conference on Mathematics and Computer Science, online, 2020,
                    Title: Coupled fixed point theorem and fractals on mixed patterns, joint work with Anna Soós.</li>
                <li>22nd International Conference on Control Systems and Computer Science - 9th International Workshop on
                    Interdisciplinary Approaches in Fractal Analysis, Bucharest, Romania, 2019,
                    Fractal analysis on the football pitch, joint work with Anna Soós.</li>
				<li>Fractal Geometry and Stochastics 6, Bad Herrenald, Germany, 2018,
                    Title: Fractal analysis and fixed point theorems on probabilistic high-dimensional Apollonian graph sequences, joint work with Anna Soós.</li>
                <li>12th Joint Conference on Mathematics and Computer Science, Cluj, Romania, 2018,
                    Title: Fractal analysis on growing graph sequences, joint work with Anna Soós.</li>
                <li>5th Winter School of PhD Students in Informatics and Mathematics,
                    Debrecen, Hungary, 2018, Title: Fractal analysis on evolving Apollonian networks,
                    joint poster with Anna Soós.</li>
                <li>21st International Conference on Control Systems and Computer Science - 8th International Workshop on
                    Interdisciplinary Approaches in Fractal Analysis, Bucharest, Romania, 2017,
                    Fixed point theorem on high dimensional Apollonian networks, joint work with Anna Soós.</li>
                <li>4th Winter School of PhD Students in Informatics and Mathematics,
                    Pécs, Hungary, 2017, Title: Fractal dimension algorithms for social networks,
                    joint poster with Anna Soós.</li>
                <li>11th Joint Conference on Mathematics and Computer Science, Eger, Hungary, 2016, Title:
                    Fixed sets of iterated (multi)function systems driven by Erdos-Rényi graphs, joint work with Anna Soós.</li>
                <li>3rd Winter School of PhD Students in Informatics and Mathematics,
                    Győr, Hungary, 2016, Title: Iterated multifunction systems corresponding to self-similar networks,
                    joint poster with Anna Soós.</li>
                <li>Quality and excellence in Doctoral Reseach, Babeș-Bolyai University, Băile Felix
                    - Félixfürdő, Romania, 2015, Title: An iterated multifunction system corresponding to self-similar
                    networks, joint work with Anna Soós.</li>
                <li>Fractal Geometry and Stochastics V, Tabarz, Germany, 2014, Title:
                    The argument of the Hausdorff dimension for the representation of strategies palying stochastic
                    prisoners dilemma on probabilistic graphs, Coordinator: dr. Anna Soós.</li>
            </ul>

            <br/>
            In Hungarian:

            <br/>
            <br/>
            <ul className="list-disc">
                <li>Fiatalok a fiatalokért vállalkozói mentorprogram, Kreatív Kolozsvár, Kolozsvár, Románia, 2024, Előadás címe:
                                kocka.xyz - matekplatform prototípus általános iskolások számára</li>
                <li>Double Rise fesztivál: RMKT - Tóbiás Udvar, Torockó, Románia, 2023, Előadás címe:
                                ChatGPT kezdőszett egyetemistáknak és nemcsak: hogyan használhatjuk okosan a mesterséges intelligencia eszközeit</li>
                <li>RMKT Bizniszvitamin, Kolozsvár, Románia, 2023, Előadás címe:
                                ChatGPT, OpenAI és hasonló kulcsszavak</li>
                <li>A Magyar Tudomány Napja Erdélyben, 11. Matematika és Informatika Alkalmazásokkal Konferencia,
                                Kolozsvár, Románia, 2020, Előadás címe: Fixponttétel gráfvezérelt kevert mintázatokon, társszerző: dr. Soós Anna</li>
                <li>II. erdélyi adatvizualizáció mini-konferencia, Kolozsvár, 2020, Előadás címe:
			          Társadalmi hálózatok vizualizációja: az El Clásicotól a Dalfutár dalokig</li>
                <li>A Magyar Tudomány Napja Erdélyben, 10. Matematika és Informatika Alkalmazásokkal Konferencia,
                    Kolozsvár, Románia, 2019, Előadás címe: Fraktálelemzés és fixponttétel magasabb dimenziójú apolloniai hálózatokon, társszerző: dr. Soós Anna</li>
                <li>I. erdélyi adatvizualizáció mini-konferencia, Kolozsvár, 2019, Előadás címe:
                    Adatvizualizáció és hálózatelemzés a focipályán</li>
                <li>A Magyar Tudomány Napja Erdélyben, Sepsiszentgyörgy, 2018, Előadás címe:
                    Fixponttétel apollóniai hálózatokon</li>
                <li>Sepsiszentgyörgy Város Tanácsa, Sepsiszentgyörgy, 2017, Előadás címe:
                    Növekvő hálózatok fraktálelemzése</li>
                <li>Simon Levente, Developers Meetup, Sepsiszemtgyörgy,
                    Románia, 2017, Előadás címe: Hálózatok vizualizációja</li>
                <li>Thinkonomy Christmas Talks, Sepsiszentgyörgy, Románia, 2016, Előadás címe:
                    Önkéntesek és hálózatok</li>
                <li>A Magyar Tudomány Napja Erdélyben, 7. Matematika és Informatika Alkalmazásokkal Konferencia,
                    Kolozsvár, Románia, 2016, Előadás címe: Fixponttétel apollóniai hálózatokon, társszerző: dr. Soós Anna</li>
                <li>III. Kárpát-medencei szakkollégiumi konferencia, Eötvös Collegium, Budapest, Magyarország, 2016, Előadás címe:
                    Hipergráfok fraktálelemzése: a doboz-lefedési algoritmusoktól a többértékű iterált függvényrendszerekig</li>
                <li>6. Üzleti tervek versenye, Junior Business Club – BBTE, Sepsiszentgyörgy, Románia,
                    2016, Előadás címe: network connoiseur – hálózatkutatás az üzleti életben. 3. díj</li>
                <li>IV. Interdiszciplináris párbeszéd. Egyediség és véletlen, BBTE, Kolozsvár, Románia, 2015,
                    Előadás címe: Társadalmi hálózatok fraktálelemzése</li>
                <li>Tudásteremtés és –alkalmazás a modern társadalomban konferencia, Szegedi Tudományegyetem, Szeged,
                    Magyarország, 2015, Előadás címe: Társadalmi hálózatok fraktálelemzése a mohó-színezési doboz-lefedési
                    algoritmus segítségével</li>
                <li>30. NYATA – Szakkollégiumok Nyári Találkozója, Kolozsvár, Románia, 2015, Előadás címe:
                    A magyarországi szakkollégiumi struktúra erdélyi magyar leképeződései: közös pontok és különbségek</li>
                <li>II. Kárpát-medencei szakkollégiumi konferencia, Selye János Egyetem, Komárom, Szlovákia, 2015,
                    Előadás címe: Erdős-Rényi hipergráfok fraktálelemzése</li>
                <li>XXXII. Országos Tudományos Diákköri Konferencia – Fizika-, Földtudományok- és Matematika szekció,
                    Alkalmazott matematika panel, Kolozsvár, Románia, 2015, Előadás címe:
                    Valószínűségi gráfok fraktáldimenzió függvényeinek számítógépes közelítése</li>
                <li>Tehetséggondozás az ELTE-n – a hallgatók szemével, Budapest, 2015, Előadás címe: A ELTE szakkollégiumok és
                    a kolozsvári magyar szakkollégiumok kapcsolatai</li>
                <li>CEEPUS szeminárium, Ljubljanai Egyetem, Ljubjana, Szlovénia, 2015,
                    Előadás címe: Hálózatok fraktálelemzése</li>
                <li>PhD-konferencia, Balassi Intézet Márton Áron Szakkollégiuma, Pécs, Magyarország, 2015,
                    Előadás címe: Erdős-Rény hipergráfok fokszámfüggvényeinek fraktálvizsgálata</li>
                <li>A Magyar Tudomány Napja Erdélyben, 5. Matematika és Informatika Alkalmazásokkal Konferencia,
                    Kolozsvár, Románia, 2014, Előadás címe: Doboz-lefedési gráfalgoritmusok optimalizálása és gyorsítása,
                    Szakmai irányító: dr. Soós Anna</li>
                <li>Sepsiszentgyörgy Város Tanácsa, Sepsiszentgyörgy, 2014, Előadás címe:
                    Társadalmi hálózatok fraktálelemzése</li>
                <li>Közgazdász Borklub, Kolozsvár, Románia, 2014, Előadás címe:
                    Bázis és potenciál a Romaniái Magyar Közgazdász Társaság hálózatában</li>
                <li>A Babeș-Bolyai Tudományegyetem Szakkollégiumának évzáró konferenciája, Kolozsvár, Románia, 2014,
                    Előadás címe: A fraktáldimenzió érve a valószínűségi hálózatok egy innovatív algoritmussal való
                    ábrázolása mellett, Szakmai irányító: dr. Soós Anna (román nyelven)</li>
                <li>XVII. Erdélyi Tudományos Diákköri Konferencia, Kolozsvár, Románia, 2014, Előadás címe:
                    Hálózatmodellek fraktálelemzése, Matematika szekció, Szakmai irányító: dr. Soós Anna</li>
                <li>Radikalizmus a struktúrában: a szakkollégiumok szerepe a felsőoktatásban, Kolozsvár, Románia,
                    2014, Előadás címe: A fraktáldimenzió érve a valószínűségi hálózatok egy
                    innovatív algoritmussal való ábrázolása mellett, Szakmai irányító: dr. Soós Anna</li>
                <li>Innováció és kreativitás a tudományban, Sapientia EMTE,
                    Kolozsvár, Románia, 2013, Előadás címe: A fraktáldimenzió érve a valószínűségi hálózatok
                    egy innovatív algoritmussal való ábrázolása mellett, Leginovatívabb téma díja, Szakmai irányító: dr. Soós Anna</li>
                <li>Hálózatok 2013, Budapest, Magyarország, 2013, Előadás címe: Fraktáltulajdonságok a
                    háromszéki civil szervezetek hálózatában</li>
                <li>A Magyar Tudomány Napja Erdélyben, 4. Matematika és Informatika Alkalmazásokkal
                    Konferencia Vályi Gyula (1855-1913) emlékére, Kolozsvár, Románia, 2013,
                    Előadás címe: A fraktáldimenzió érve a valószínűségi hálózatok Fruchterman-Reingold algoritmussal
                    való ábrázolása mellett, Szakmai irányító: dr. Soós Anna</li>
                <li>DÖKSZAB - Diákönkormányzati Szabadegyetem, Tasnád, Románia, 2013, Előadás címe: Értékek szerepe és szerepek értéke társadalmi hálózatokban</li>
                <li>XVI. Erdélyi Tudományos Diákköri Konferencia, Kolozsvár, Románia, 2013, Előadás címe: Valószínűségi gráfok fraktáldimenzió függvényeinek számítógépes közelítése, Matematika szekció, 2. díj, Szakmai irányító: dr. Soós Anna</li>
                <li>XIV. Eötvös Konferencia, Budapest, Magyarország, 2013, Előadás címe: Valószínűségi gráfok fraktáldimenzió függvényeinek számítógépes közelítése, Matematika-fizika szekció, Szakmai irányító: dr. Soós Anna</li>
                <li>II. Erdélyi Politikatudományi Konferencia, Kolozsvár, Románia, 2013, Előadás címe: A háromszéki civil szervezetek hálózatának fejlődése</li>
                <li>Hálózatok 2012, Budapest, Magyarország, 2012, Előadás címe: A háromszéki civil szervezetek hálózatának fejlődése</li>
                <li>XV. Erdélyi Tudományos Diákköri Konferencia, Kolozsvár, Románia, 2012, Előadás címe: Gráfok fraktáldimenziójának elemzése, Matematika szekció, 3. díj, Szakmai irányító: dr. Soós Anna</li>
                <li>Hálózatok 2011, Szombathely, Magyarország, 2011, Előadás címe: Dráma és szövegkönyv hálózatos viszonya Tamási Áron „Énekes madár” című drámája és a Tamási Áron Színház „A csoda” című előadása alapján</li>
                <li>XIV. Erdélyi Tudományos Diákköri Konferencia, Kolozsvár, Románia, 2011, Előadás címe: Tusványos – Húsz esztendőm hatalom, Kommunikáció szekció, Szakmai vezető: dr. Kádár Magor</li>
                <li>Hálózatok 2010, Szombathely, Magyarország, 2010, Előadás címe: Háromszéki civil szervezetek hálózata</li>
                <li>IX. Vajdasági Magyar Tudományos Diákköri Konferencia, Újvidék, Szerbia, 2010, Előadás címe: Háromszéki civil szervezetek hálózata, Társadalomtudományi szekció, Szakmai vezető: dr. Kádár Magor</li>
                <li>XIII. Erdélyi Tudományos Diákköri Konferencia , Kolozsvár, Románia, 2010, Előadás címe: Háromszéki civil szervezetek hálózata, Kommunikáció szekció, Szakmai vezető: dr. Kádár Magor</li>


          </ul>
          
          <br/>
          <hr/>
            
      </div>

    </main>
  );
}
