__BRYTHON__.use_VFS = true;
var scripts = {"$timestamp": 1589126589425, "header": [".py", "from browser import bind,console,html,window,document,alert\nimport browser.widgets.menu as menu\n\nhref=document.location.href\nprotocol,rest=href.split(\"://\")\nhost,addr=rest.split(\"/\",1)\n\n\nif protocol ==\"http\"and host.endswith(\"brython.info\"):\n document.location.href=f\"https://{rest}\"\n \nMenu=menu.Menu\n\ntrans_menu={\n\"menu_console\":{\"en\":\"Console\",\"es\":\"Consola\",\"fr\":\"Console\"},\n\"menu_editor\":{\"en\":\"Editor\",\"es\":\"Editor\",\"fr\":\"Editeur\"},\n\"menu_demo\":{\"en\":\"Demo\",\"es\":\"Demo\",\"fr\":\"D\u00e9mo\"},\n\"menu_gallery\":{\"en\":\"Gallery\",\"es\":\"Galer\u00eda\",\"fr\":\"Galerie\"},\n\"menu_doc\":{\"en\":\"Documentation\",\"es\":\"Documentaci\u00f3n\",\"fr\":\"Documentation\"},\n\"menu_download\":{\"en\":\"Download\",\"es\":\"Descargas\",\"fr\":\"T\u00e9l\u00e9chargement\"},\n\"menu_dev\":{\"en\":\"Development\",\"es\":\"Desarrollo\",\"fr\":\"D\u00e9veloppement\"},\n\"menu_ex\":{\"en\":\"Examples\",\"es\":\"Ejemplos\",\"fr\":\"Exemples\"},\n\"menu_groups\":{\"en\":\"Community\",\"es\":\"Comunidad\",\"fr\":\"Communaut\u00e9\"},\n\"menu_ref\":{\"en\":\"Reference\",\"es\":\"Referencia\",\"fr\":\"R\u00e9f\u00e9rence\"},\n\"menu_resources\":{\"en\":\"Resources\",\"es\":\"Recursos\",\"fr\":\"Ressources\"},\n\"menu_tutorial\":{\"en\":\"Tutorial\",\"es\":\"Tutorial\",\"fr\":\"Tutoriel\"}\n}\nlinks={\n\"home\":\"/index.html\",\n\"console\":\"/tests/console.html\",\n\"demo\":\"/demo.html\",\n\"editor\":\"/tests/editor.html\",\n\"gallery\":\"/gallery/gallery_{language}.html\",\n\"ref\":\"/static_doc/{language}/intro.html\",\n\"download\":\"https://github.com/brython-dev/brython/releases\",\n\"dev\":\"https://github.com/brython-dev/brython\",\n\"groups\":\"/groups.html\",\n\"tutorial\":\"/static_tutorial/{language}/index.html\"\n}\n\ndef show(language=None ):\n ''\n \n has_req=False\n qs_lang=None\n \n prefix=\"/\"\n \n if language is None :\n  qs_lang=document.query.getfirst(\"lang\")\n  if qs_lang and qs_lang in [\"en\",\"fr\",\"es\"]:\n   has_req=True\n   language=qs_lang\n  else :\n   lang=__BRYTHON__.language\n   if lang in [\"en\",\"fr\",\"es\"]:\n    language=lang\n    \n language=language or \"en\"\n \n _banner=document[\"banner_row\"]\n \n loc=window.location.href\n current=None\n for key in [\"home\",\"console\",\"demo\",\"editor\",\"groups\"]:\n  if links[key]in loc:\n   current=key\n   break\n   \n if current is None :\n  if \"gallery\"in loc:\n   current=\"gallery\"\n  elif \"static_doc\"in loc:\n   current=\"doc\"\n   \n def load_page(key):\n  def f(e):\n   href=links[key].format(language=language)\n   window.location.href=href+f\"?lang={language}\"\n  return f\n  \n menu=Menu(_banner,default_css=False )\n \n menu.add_item(trans_menu[\"menu_tutorial\"][language],\n callback=load_page(\"tutorial\"))\n \n menu.add_item(trans_menu[\"menu_demo\"][language],\n callback=load_page(\"demo\"))\n \n menu.add_item(trans_menu[\"menu_doc\"][language],\n callback=load_page(\"doc\"))\n \n menu.add_item(trans_menu[\"menu_console\"][language],\n callback=load_page(\"console\"))\n \n menu.add_item(trans_menu[\"menu_editor\"][language],\n callback=load_page(\"editor\"))\n \n menu.add_item(trans_menu[\"menu_gallery\"][language],\n callback=load_page(\"gallery\"))\n \n ex_resources=menu.add_menu(trans_menu[\"menu_resources\"][language])\n ex_resources.add_item(trans_menu[\"menu_download\"][language],\n callback=load_page(\"download\"))\n ex_resources.add_item(trans_menu[\"menu_dev\"][language],\n callback=load_page(\"dev\"))\n ex_resources.add_item(trans_menu[\"menu_groups\"][language],\n callback=load_page(\"groups\"))\n \n \n sel_lang=html.DIV(Class=\"sel_lang\")\n \n document.body.insertBefore(sel_lang,_banner.nextElementSibling)\n select=html.SELECT(Class=\"language\")\n sel_lang <=select\n for lang1,lang2 in [[\"en\",\"English\"],\n [\"fr\",\"Fran\u00e7ais\"],\n [\"es\",\"Espa\u00f1ol\"]]:\n  select <=html.OPTION(lang2,value=lang1,selected=lang1 ==language)\n  \n @bind(select,\"change\")\n \n def change_language(ev):\n  sel=ev.target\n  new_lang=sel.options[sel.selectedIndex].value\n  head=f\"{protocol}://{host}\"\n  new_href=href\n  if addr.startswith(\"index.html\"):\n   new_href=f\"{head}/index.html?lang={new_lang}\"\n  elif addr.startswith((\"static_tutorial\",\"static_doc\")):\n   elts=addr.split(\"/\")\n   elts[1]=new_lang\n   new_href=f\"{head}/{'/'.join(elts)}\"\n  elif addr.startswith((\"demo.html\",\n  \"tests/console.html\",\n  \"tests/editor.html\")):\n   elts=addr.split(\"?\")\n   new_href=f\"{head}/{elts[0]}?lang={new_lang}\"\n  document.location.href=new_href\n  \n return qs_lang,language\n", ["browser", "browser.widgets.menu"]]}
__BRYTHON__.update_VFS(scripts)
