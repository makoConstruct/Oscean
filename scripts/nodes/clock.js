function ClockNode(id,rect)
{
  Node.call(this,id,rect);

  this.glyph = NODE_GLYPHS.router

  this.answer = function(q)
  {
    return new Date().clock()
  }
}