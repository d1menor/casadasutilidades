const items = [
    {
        id: 0,
        nome: 'MINI CAIXA DE SOM!!!',
        img: 'minisom.PNG',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'LAMPADA COM LED DE SOM',
        img:'lampadasom.PNG',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'FONE GAMER',
        img: 'fonegamer.PNG',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'GARRAFA TERMICA (stanley)',
        img: 'gtermica.PNG',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'BLUETHOOTH SPEAKER',
        img: 'csom.PNG',
        quantidade: 0
    },
    {
        id: 5,
        nome: 'FONES BLOETOOTH',
        img: 'airpods.PNG',
        quantidade: 0
    },
    {
        id: 6,
        nome: 'CARREGADOR DE IPHONE',
        img: 'ciphone.PNG',
        quantidade: 0
    },
    {
        id: 7,
        nome: 'CARREGADOR TIPO (C)',
        img: 'caboc.PNG',
        quantidade: 0
    },
    {
        id: 8,
        nome: 'CAARREGADOR TIPO (V8)',
        img: 'v8.PNG',
        quantidade: 0
    },
    {
        id: 9,
        nome: 'CABO TIPO (C)',
        img: 'usbc.PNG',
        quantidade: 0
    },
    {
        id: 10,
        nome: 'CABO TIPO (V8)',
        img: 'v8cabo.PNG',
        quantidade: 0
    },
    {
        id: 11,
        nome: 'CABO TIPO (IPHONE)',
        img: 'ciphone.PNG',
        quantidade: 0
    },
    {
        id: 12,
        nome: 'CARREGADOR (PORTATIL)',
        img: 'cportatil.PNG',
        quantidade: 0
    },
]

inicializarloja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `
            <div class="w-full rounded overflow-hidden shadow-lg h-fit"> 
                <img class="w-full h-[20rem] object-cover object-center" src="`+ val.img + `" alt="Sunset in the mountains">
                <div class="px-6 py-4 tooltip" data-tooltip="`+ val.nome + `">
                    <div class="font-bold text-xl mb-2 whitespace-nowrap text-ellipsis overflow-hidden relative" data-bs-toggle="tooltip">`+ val.nome + `</div>
                </div>
                <div class="px-6 pt-4 pb-2"> 
                    <button class="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full" onclick="addWpp(this)" data-title="`+ val.nome + `">Adicionar ao Carrinho!</button>
                </div>
            </div>
        `;
    })
}
 inicializarloja();
      
 function addWpp(el){
     let wppHref = document.getElementById('link-wpp');
     console.log(wppHref.getAttribute('href'));
     let url = new URL(wppHref.getAttribute('href'));
     console.log(url)
     
     let produto = el.getAttribute('data-title');
     url.searchParams.set('text', (url.searchParams.get('text') ?? '')+' - '+produto);
     wppHref.setAttribute('href', url.href);
 }