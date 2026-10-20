(() => {
  const ID = 'scratch-touch-batch-fill-prototype';
  if (document.getElementById(ID)) return;

  const button = document.createElement('button');
  button.id = ID;
  button.type = 'button';
  button.textContent = '一括塗り替え：OFF';
  button.setAttribute('aria-pressed', 'false');
  button.title = '試作版。Scratchの内部処理への接続は未実装です。';

  let enabled = false;
  button.addEventListener('click', () => {
    enabled = !enabled;
    button.textContent = `一括塗り替え：${enabled ? 'ON' : 'OFF'}`;
    button.setAttribute('aria-pressed', String(enabled));
    button.classList.toggle('is-enabled', enabled);
    status.textContent = enabled
      ? '試作ボタンはONです。ただし、一括塗り替え処理はまだ接続されていません。'
      : '試作ボタンはOFFです。';
  });

  const status = document.createElement('div');
  status.id = `${ID}-status`;
  status.setAttribute('role', 'status');
  status.textContent = '試作版：ボタン表示のみ。塗り替え処理は未実装です。';

  function mount() {
    if (!document.body || document.getElementById(ID)) return;
    const host = document.createElement('div');
    host.id = `${ID}-host`;
    host.append(button, status);
    document.body.appendChild(host);
  }

  mount();
  // Scratch is a single-page app, so keep the prototype button available after navigation.
  const observer = new MutationObserver(() => {
    if (!document.getElementById(ID)) mount();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
