
document.addEventListener('DOMContentLoaded', ()=> {

  function getCart(){
    return JSON.parse(localStorage.getItem('smartzone_cart') || '[]');
  }
  function setCart(c){ localStorage.setItem('smartzone_cart', JSON.stringify(c)); }
  function cartCount(){
    const c = getCart();
    const cnt = c.reduce((s,i)=>s+i.qty,0);
    const el = document.querySelector('#cart-count');
    if(el) el.textContent = cnt;
  }
  cartCount();


  const container = document.querySelector('#products-container');
  if(container && typeof PRODUCTS !== 'undefined'){
    renderProducts(PRODUCTS);
    attachSearchFilter();
  }


  window.quickView = function(id){
    const p = PRODUCTS.find(x=>x.id==id);
    if(!p) return;
    document.querySelector('#qv-title').textContent = p.title;
    document.querySelector('#qv-body-img').src = p.images[0];
    document.querySelector('#qv-price').innerHTML = '<span class="price-current">PKR '+p.price+'</span>';
    document.querySelector('#qv-add').setAttribute('data-id', p.id);
    var qv = new bootstrap.Modal(document.getElementById('quickViewModal'));
    qv.show();
  }

  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click', function(e){
      const id = this.getAttribute('data-id');
      addToCart(parseInt(id), 1);
      if(this.closest('.modal')){ 
        const mod = bootstrap.Modal.getInstance(document.getElementById('quickViewModal'));
        if(mod) mod.hide();
      }
    });
  });


  window.addToCart = function(id, qty){
    const p = PRODUCTS.find(x=>x.id==id);
    if(!p) return;
    const cart = getCart();
    const item = cart.find(x=>x.id==id);
    if(item) item.qty += qty;
    else cart.push({id:id, qty:qty, title:p.title, price:p.price, img:p.images[0]});
    setCart(cart);
    cartCount();

    alert(p.title + ' added to cart');
  }


  const pdHolder = document.querySelector('#product-detail');
  if(pdHolder){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 1;
    const p = PRODUCTS.find(x=>x.id==id || x.id==parseInt(id));
    if(p) renderProductDetail(p);
  }


  const cartHolder = document.querySelector('#cart-items');
  if(cartHolder){
    renderCartPage();
  }


  function renderProducts(list){
    const cont = document.querySelector('#products-container');
    cont.innerHTML = '';
    list.forEach(p=>{
      const col = document.createElement('div');
      col.className = 'col-md-3 mb-4';
      col.innerHTML = `
        <div class="card h-100">
          <img src="${p.images[0]}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <div class="mb-2">
              <div class="product-title">${p.title}</div>
              <div class="mt-2">
                <span class="price-current">PKR ${p.price}</span>
                ${p.oldPrice?'<span class="price-old">PKR '+p.oldPrice+'</span>':''}
              </div>
            </div>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <div>
                <button class="btn btn-sm btn-outline-primary" onclick="quickView(${p.id})">Quick View</button>
                <a href="product.html?id=${p.id}" class="btn btn-sm btn-link">Details</a>
              </div>
              <button class="btn btn-primary btn-sm add-to-cart" data-id="${p.id}" onclick="addToCart(${p.id},1)">Add</button>
            </div>
          </div>
        </div>
      `;
      cont.appendChild(col);
    });
  }

  function attachSearchFilter(){
    const search = document.querySelector('#search-input');
    const category = document.querySelector('#filter-category');
    const sort = document.querySelector('#sort-price');
    [search,category,sort].forEach(el=>{
      if(el) el.addEventListener('change', applyFilters);
      if(el) el.addEventListener('input', applyFilters);
    });
    function applyFilters(){
      let list = PRODUCTS.slice();
      const q = search.value.trim().toLowerCase();
      if(q) list = list.filter(p=>p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
      const cat = category.value;
      if(cat && cat!=='all') list = list.filter(p=>p.category===cat);
      const s = sort.value;
      if(s==='low') list.sort((a,b)=>a.price-b.price);
      if(s==='high') list.sort((a,b)=>b.price-a.price);
      renderProducts(list);
    }
  }

  function renderProductDetail(p){
    document.querySelector('#pd-title').textContent = p.title;
    document.querySelector('#pd-main-img').src = p.images[0];
    document.querySelector('#pd-price').textContent = 'PKR ' + p.price;
    document.querySelector('#pd-desc').textContent = p.description;
    document.querySelector('#pd-specs').innerHTML = Object.entries(p.specs).map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('');
    document.querySelector('#pd-add-btn').addEventListener('click', ()=>{
      const qty = parseInt(document.querySelector('#pd-qty').value) || 1;
      addToCart(p.id, qty);
    });
  }

  function renderCartPage(){
    const cart = getCart();
    const holder = document.querySelector('#cart-items');
    holder.innerHTML = '';
    if(cart.length===0){
      holder.innerHTML = '<p>Your cart is empty.</p>';
      document.querySelector('#cart-summary').style.display='none';
      return;
    }
    let subtotal = 0;
    cart.forEach(item=>{
      subtotal += item.price * item.qty;
      const div = document.createElement('div');
      div.className = 'd-flex align-items-center mb-3';
      div.innerHTML = `
        <img src="${item.img}" style="width:80px;height:80px;object-fit:cover" class="me-3">
        <div class="flex-grow-1">
          <div><strong>${item.title}</strong></div>
          <div>PKR ${item.price}</div>
          <div class="mt-2">
            <input type="number" min="1" value="${item.qty}" class="qty-input me-2">
            <button class="btn btn-sm btn-outline-danger remove-item">Remove</button>
          </div>
        </div>
      `;
  
      div.querySelector('.qty-input').addEventListener('change', function(){
        const v = parseInt(this.value) || 1;
        item.qty = v;
        setCart(cart);
        renderCartPage();
        cartCount();
      });
      div.querySelector('.remove-item').addEventListener('click', function(){
        const idx = cart.findIndex(x=>x.id===item.id);
        if(idx>-1) cart.splice(idx,1);
        setCart(cart);
        renderCartPage();
        cartCount();
      });
      holder.appendChild(div);
    });
    const shipping = 500;
    const total = subtotal + shipping;
    document.querySelector('#subtotal').textContent = 'PKR ' + subtotal;
    document.querySelector('#shipping').textContent = 'PKR ' + shipping;
    document.querySelector('#total').textContent = 'PKR ' + total;
    document.querySelector('#cart-summary').style.display='block';
  }

});
