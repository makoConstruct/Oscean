function graph()
{
  Ø("query").create({x:2,y:4},QueryNode)

  Ø("model").mesh({x:6,y:0},[
    Ø("router").create({x:4,y:2},RouterNode),
    Ø("database").create({x:4,y:9},DatabaseNode),
    Ø("lexicon").create({x:2,y:16},IndentalNode,Term),
    Ø("horaire").create({x:6,y:16},CollectionNode,Log),
  ])

  Ø("assoc").mesh({x:16,y:0},[
    Ø("template").create({x:11,y:2},TemplateNode),
    Ø("page").create({x:2,y:11},PageTemplate),
      Ø("missing").create({x:2,y:16},MissingTemplate),
    Ø("diary").create({x:5,y:11},DiaryTemplate),
    Ø("portal").create({x:8,y:11},DiaryTemplate),
    Ø("index").create({x:11,y:11},DiaryTemplate),
    Ø("docs").create({x:14,y:11},DiaryTemplate),
    Ø("calendar").create({x:17,y:11},DiaryTemplate),
    Ø("special").create({x:20,y:11},SpecialTemplate),
      Ø("home").create({x:17,y:16},HomeTemplate),
      Ø("death").create({x:20,y:16},DeathTemplate)
  ])

  Ø("client").mesh({x:40,y:0},[
    Ø("document").create({x:2,y:2},DocumentNode),
    Ø("view").create({x:2,y:6},DomNode),
    Ø("header").create({x:2,y:11},DomNode),
      Ø("photo").create({x:2,y:16},DomNode,"photo"),
      Ø("search").create({x:6,y:16},DomNode),
      Ø("logo").create({x:6,y:21},DomNode,"a"),
    Ø("core").create({x:10,y:11},DomNode),
      Ø("content").create({x:10,y:16},DomNode),
      Ø("sidebar").create({x:14,y:16},DomNode),
        Ø("icon").create({x:10,y:21},DomNode),
        Ø("navi").create({x:14,y:21},DomNode),
    Ø("footer").create({x:6,y:11},DomNode,"yu",`
      <wr>
    <a href="https://twitter.com/neauoire" class="icon twitter external"></a><a href="https://github.com/neauoire" class="icon github external"></a><a href="Rotonde" class="icon rotonde"></a>
    <yu id="clock"><svg width="35" height="35"><path class="fh" d="M23,0 L23,35 M23,22 L35,22 M26,22 L26,35 "></path></svg></yu><a onclick="Ø('query').bang('devine lu linvega')">Devine Lu Linvega</a> © 06I04—18Z14<br>BY-NC-SA 4.0 <span style="color:#ccc">build469</span><hr></wr>`),
  ])

  // Model
  Ø("router").syphon("database")
  Ø("database").syphon(["lexicon","horaire"])

  // Assoc
  Ø("template").syphon(["page","special","diary","portal","index","docs","calendar"])
  Ø("special").syphon(["home","death"])
  Ø("page").syphon(["missing"])

  Ø("template").connect(["view","document"])
  Ø("header").bind(["logo","photo","search"])
  Ø("view").bind(["header","core","footer"])
  Ø("core").bind(["sidebar","content"])
  Ø("sidebar").bind(["icon","navi"])

  Ø("query").connect("router")
  Ø("router").connect("template")

  Ø("query").bang()
}
