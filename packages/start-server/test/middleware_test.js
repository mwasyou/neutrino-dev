import test from 'ava';
import { Neutrino } from 'neutrino';

const mw = () => require('..');
const options = { name: 'app.js' };

test('loads middleware', t => {
  t.notThrows(mw);
});

test('uses middleware', t => {
  t.notThrows(() => Neutrino().use(mw()));
});

test('uses with options', t => {
  t.notThrows(() => Neutrino().use(mw(), options));
});

test('uses middleware while debugging', t => {
  const api = Neutrino({ debug: true });

  t.notThrows(() => api.use(mw()));
});

test('uses with options while debugging', t => {
  const api = Neutrino({ debug: true });

  t.notThrows(() => api.use(mw(), options));
});

test('instantiates', t => {
  const api = Neutrino();

  api.use(mw());

  t.notThrows(() => api.config.toConfig());
});

test('instantiates with options', t => {
  const api = Neutrino();

  api.use(mw(), options);

  t.notThrows(() => api.config.toConfig());
});
