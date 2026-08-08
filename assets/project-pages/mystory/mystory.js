const A = document.body.dataset.assetBase || '../assets/images/project-gallery/';
const figure = (file, alt, caption) => `<figure class="tab-media-figure"><button class="media-magnify tab-media-frame" type="button" data-full="${A}${file}" data-alt="${alt}" data-caption="${caption}" aria-label="Enlarge image: ${alt}"><img src="${A}${file}" alt="${alt}"><span aria-hidden="true"></span></button><figcaption>${caption}</figcaption></figure>`;

const chapters = [
  {
    id: 'challenge',
    label: 'The Challenge',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Make history a system of relationships</h3><p>The learning goals extended beyond recognizing facts. Players needed to connect people, items, actions, and concepts to historical periods and domains; identify themes across periods; apply knowledge in novel situations; and demonstrate cause-and-effect by reacting to what other players contributed.</p></section>
      <section class="editorial-text-section"><h3>Welcome players with different levels of knowledge</h3><p>The game could not assume expert knowledge or confident reading. Cards needed enough context to support role-play without overwhelming players, and the rules needed to help beginners participate without turning historical understanding into a gatekeeping mechanism.</p></section>
      <section class="editorial-text-section"><h3>Balance individual choice with a shared experience</h3><p>The central design tension was how to preserve surprise and creative freedom while keeping the group attentive to one unfolding narrative. If players focused too heavily on optimizing a hand, earning points, or planning a private response, the social learning at the heart of the game disappeared.</p></section>
    </div>`
  },
  {
    id: 'prototype-one',
    label: 'Prototype 1',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>Time travel as strategy and resource management</h3><p>The initial concept cast players as budding historians travelling through four chronological periods. During each period, players spent action points and influence cards to bid for historical figures. They then pooled figure, action, and item attributes&mdash;Bravery, Intelligence, Charisma, Luck, Creativity, and Strength&mdash;to meet one of several outcomes on an event card.</p><div class="mechanic-flow"><div class="mechanic-step"><strong>1. Build influence</strong><span>Play actions and items to compete for historical figures.</span></div><div class="mechanic-step"><strong>2. Face an event</strong><span>Combine character attributes and remaining resources.</span></div><div class="mechanic-step"><strong>3. Score contribution</strong><span>Earn points in proportion to what each card adds.</span></div></div></section>
      <section class="editorial-text-section"><h3>What the first design made visible</h3><p>The design used cards to deliver historical information just in time and encouraged risk-reward decisions about specialization, diversification, and contested figures. Yet playtesting showed that the numerical layer competed with the learning intent: players concentrated on comparing statistics and winning bids more than reading, interpreting, and connecting the history.</p></section>
    </div>`
  },
  {
    id: 'prototype-two',
    label: 'Prototype 2',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>From winning figures to becoming them</h3><p>The second prototype removed bidding and character statistics. Every player began on equal footing by drawing a historical figure, then used History cards to role-play and build an alternate timeline together. Cooperative and competitive modes were explored, with Condition cards providing short-term prompts and Event cards supplying historical context and story starters.</p></section>
      <section class="editorial-text-section"><h3>Make information usable at the moment of play</h3><p>Repeated feedback described the cards as too wordy. The team added illustrations, replaced obscure figures with more recognizable names, simplified concepts, shortened sentences, and bolded key phrases. These choices supported less confident readers and English learners without removing the information needed to improvise a meaningful story.</p></section>
      <section class="editorial-text-section"><h3>Design the room for listening</h3><p>Players could take turns when ready rather than follow a rigid order, allowing confident storytellers to model play and others to draw inspiration or ask the group for help. A timed card-selection moment then moved unused cards out of view so attention shifted from private planning to other players&rsquo; contributions.</p></section>
    </div>`
  },
  {
    id: 'test-iterate',
    label: 'Test &amp; Iterate',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Card choice was becoming the game</h3><p>New players felt pressured to absorb unfamiliar cards and identify the &ldquo;right&rdquo; one while reacting immediately to a changing story. They became stressed or flustered, and the pauses drained the energy from play. The team recognized this as extraneous cognitive load: attention intended for storytelling was being spent on hand management.</p></section>
      <section class="editorial-text-section"><h3>Competition fractured the narrative</h3><p>Voting and points encouraged players to outdo one another with elaborate contributions. The result could be entertaining but chaotic: each turn became a separate performance, with few players referring back to earlier ideas. The design&rsquo;s cooperative story and competitive evaluation were sending contradictory signals.</p></section>
      <section class="editorial-text-section"><h3>Use physical layout as guidance</h3><p>The final redesign split play into matching and storytelling phases. By first laying every card into a visible timeline, the table itself held the sequence and relationships. When narration began, players no longer needed to search a hand; they could focus on listening, finding the trailing narrative thread, and extending it.</p></section>
    </div>`
  },
  {
    id: 'final-game',
    label: 'Final Game',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>Match first, narrate second</h3><p>Two Event cards begin face down at opposite ends of the table. Players place History cards between them, matching the era color or domain affinity of an adjacent card. Once all but one card in each hand has been played, the first Event is revealed and the group narrates from left to right. At the final Event, each player uses the last card in hand to conclude their character&rsquo;s story.</p><div class="mechanic-flow"><div class="mechanic-step"><strong>1. Construct</strong><span>Build a linear path between hidden historical events.</span></div><div class="mechanic-step"><strong>2. Connect</strong><span>Match cards through a shared era or domain affinity.</span></div><div class="mechanic-step"><strong>3. Co-author</strong><span>Turn the timeline into one causal, evolving narrative.</span></div></div></section>
      <section class="editorial-text-section"><h3>A two-card system</h3><p>The final version reduced four card types to two: History cards represent people, objects, actions, and concepts; Event cards frame critical moments and offer situated role-play prompts. Six era colors and six affinities&mdash;Art &amp; Literature, Science &amp; Discovery, Philosophy &amp; Religion, Politics &amp; Government, War &amp; Combat, and Society &amp; Pop Culture&mdash;make relationships across time playable.</p></section>
    </div>`
  },
  {
    id: 'card-system',
    label: 'Card System',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>A modular visual vocabulary for history</h3><p>The finished system gives each card several readable entry points: a prominent subject, an image, concise context, an era color, and an affinity icon. Players can begin with what they recognize, then use the other signals to discover associations and bring new material into the group&rsquo;s narrative.</p><div class="card-gallery">${figure('mystory-genghis-khan.png', 'Genghis Khan History card', 'A historical figure represented as a History card in the Politics & Government domain.')}${figure('mystory-sacagawea.png', 'Sacagawea History card', 'A historical figure card connecting a recognizable person to an era and domain.')}${figure('mystory-sputnik.png', 'Sputnik History card', 'A twentieth-century History card designed for cross-era matching and storytelling.')}${figure('mystory-submarine.png', 'Submarine History card', 'A technology card whose concise copy supports quick interpretation during play.')}${figure('mystory-code-of-hammurabi.png', 'Code of Hammurabi History card', 'A legal concept card demonstrating the final hierarchy of image, context, era, and affinity.')}${figure('mystory-vesuvius-event.png', 'Eruption of Mount Vesuvius Event card', 'An Event card provides historical context and a situated storytelling prompt.')}${figure('mystory-card-back.png', 'Mystory History card back', 'The History card back distinguishes the main content deck.')}${figure('mystory-event-back.png', 'Mystory Event card back', 'A separate reverse identifies the Event deck before cards are revealed.')}</div></section>
    </div>`
  },
  {
    id: 'reflection',
    label: 'Reflection',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Simplification strengthened the learning</h3><p>Removing statistics, bidding, card categories, voting, and points might appear to reduce depth. In practice, it concentrated depth where it mattered: recognizing patterns, forming causal links, taking a perspective, and adapting to others&rsquo; ideas. The rules stopped competing with the historical thinking they were meant to support.</p></section>
      <section class="editorial-text-section"><h3>Collaboration needs mechanical support</h3><p>Calling a game cooperative did not guarantee cooperative behavior. The final design made listening structurally necessary: cards form one path, stories proceed along that path, and every contribution must build on the last. Helping another player is permitted because shared narrative quality, not individual advantage, is the goal.</p></section>
      <section class="editorial-text-section"><h3>What remained to explore</h3><p>The final report identified balance and onboarding as next steps. Hand size affects story length and needed testing across four- and five-player groups. A stronger introductory premise could ease players into the time-traveller role. The modular system also invited more eras, events, and History cards while preserving the same core rules.</p></section>
    </div>`
  }
];

const root = document.querySelector('#layout-root');
root.innerHTML = `<div class="tab-list" role="tablist" aria-label="Case study chapters">${chapters.map((chapter, index) => `<button role="tab" id="tab-${chapter.id}" aria-controls="tab-panel-${chapter.id}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}">${chapter.label}</button>`).join('')}</div>${chapters.map((chapter, index) => `<section class="card tab-panel" role="tabpanel" id="tab-panel-${chapter.id}" aria-labelledby="tab-${chapter.id}" ${index ? 'hidden' : ''}><div class="tab-panel-grid">${chapter.content}</div></section>`).join('')}`;

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(selected) {
  tabs.forEach(tab => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', active);
    tab.tabIndex = active ? 0 : -1;
    document.querySelector(`#${tab.getAttribute('aria-controls')}`).hidden = !active;
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next]);
    tabs[next].focus();
  });
});

const dialog = document.createElement('dialog');
dialog.className = 'image-lightbox';
dialog.innerHTML = '<div class="lightbox-inner"><button class="lightbox-close" type="button" aria-label="Close enlarged image">&times;</button><img alt=""><p></p></div>';
document.body.append(dialog);

document.addEventListener('click', event => {
  const button = event.target.closest('.media-magnify');
  if (!button) return;
  dialog.querySelector('img').src = button.dataset.full;
  dialog.querySelector('img').alt = button.dataset.alt;
  dialog.querySelector('p').textContent = button.dataset.caption;
  dialog.showModal();
});

dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
