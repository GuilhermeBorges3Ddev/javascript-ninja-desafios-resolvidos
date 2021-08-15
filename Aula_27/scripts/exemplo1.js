(function(doc){
  /**
   * Atributos de elementos HTML disponíveis via JS como atributos do objeto DOM(que são ao mesmpo Getters e Setters):
   * element.id
   * element.className
   * element.value
   * element.href(para links)
   * element.title
   * element.src(para tags de imagens ou tags de scripts)
   *-------------------------------------------------------------------------------------------------------------------
   * OBS: Temos os já vistos métodos do DOM: getAttribute(attr) e o setAttribute(attr, value)
   *-------------------------------------------------------------------------------------------------------------------
   * Para manipular o DOM de maneira mais performática, é possível criar um documento vazio onde hajam inserções e mudanças de nós, onde só depois do documento pronto ele será incorporado ao DOM;
   * Para criar esse documento temporário usamos document.createDocumentFragment();
   * No caso, esse documento temporário não possui nó pai, ou seja, .parentNode será NULL;
   * O nodeType do fragmento é 11;
   */

  var fragment = doc.createDocumentFragment();
  var childP = doc.createElement('p');
  var textChildP = doc.createTextNode('Texto da tag "p"');

  childP.appendChild(textChildP);
  fragment.appendChild(childP);

  //O fragmento só é inserido no body, depois de manipulado.
  doc.body.appendChild(fragment);

})(document);
