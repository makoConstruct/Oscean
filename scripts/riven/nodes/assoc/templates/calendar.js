function CalendarTemplate(id,rect,...params)
{
  Node.call(this,id,rect);

  this.glyph = NODE_GLYPHS.element

  this.answer = function(q)
  {
    let logs = q.target == "calendar" ? q.tables.horaire : q.result.logs;
    let html = ``;

    let prev_y = 0;
    for(let id in logs){
      let log = logs[id];
      if(!log.is_event){ continue; }
      if(log.time.y != prev_y){ html += `<ln class='head'>20${log.time.y}</ln>`; prev_y = log.time.y; }
      html += `<ln style='${log.time.offset > 0 ? 'color:#aaa' : ''}'>{${log.name ? log.name : log.term+' '+log.task.capitalize()}(${log.term})}</a> <t title='${log.time}'>${log.time.ago(60)}</t></ln>`.to_curlic()
    }
    return `${new BarViz(logs)}${new StatusViz(logs)}<list class='tidy' style='max-width:calc(100% - 15px)'>${html}</list>`;
  }
}