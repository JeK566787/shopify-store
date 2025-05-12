document.addEventListener('DOMContentLoaded', async function () {
    const container = document.getElementById('wishlist-items');
    const data = JSON.parse(localStorage.getItem('bss-cart-watcher') || '{}');
    const items = data.items || [];

    if (!items.length) {
        container.innerHTML = '<p>Ваш список бажаного порожній.</p>';
        return;
    }

    container.innerHTML = '';

    for (const item of items) {
        try {
            const res = await fetch(`/products/${item.variant_id}.js`);
            if (!res.ok) throw new Error('Product not found');
            const product = await res.json();

            const itemHTML = `
        <div class="wishlist-item" data-id="${item.variant_id}">
          <img src="${product.featured_image}" alt="${product.title}" width="100">
          <h3>${product.title}</h3>
          <p>Ціна: ${product.price / 100} грн</p>
          <p>Кількість: ${item.quantity}</p>
          <button class="remove-btn">Видалити</button>
        </div>
      `;
            container.insertAdjacentHTML('beforeend', itemHTML);
        } catch (err) {
            console.warn('Помилка при завантаженні товару:', err);
        }
    }

    container.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-btn')) {
            const itemEl = e.target.closest('.wishlist-item');
            const idToRemove = Number(itemEl.dataset.id);
            const newItems = items.filter(i => i.variant_id !== idToRemove);
            localStorage.setItem('bss-cart-watcher', JSON.stringify({ ...data, items: newItems }));
            itemEl.remove();

            if (newItems.length === 0) {
                container.innerHTML = '<p>Ваш список бажаного порожній.</p>';
            }
        }
    });
});
