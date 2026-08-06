const A = document.body.dataset.assetBase || '../assets/images/project-gallery/emotionopolis/';
const figure = (file, alt, caption, className = '') => `<figure class="tab-media-figure ${className}"><button class="media-magnify tab-media-frame" type="button" data-full="${A}${file}" data-alt="${alt}" data-caption="${caption}" aria-label="Enlarge image: ${alt}"><img src="${A}${file}" alt="${alt}" loading="lazy" decoding="async"><span aria-hidden="true"></span></button><figcaption>${caption}</figcaption></figure>`;

const chapters = [
  {
    id: 'concept',
    label: 'The Concept',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>A safe space for emotional experimentation</h3><p>High levels of emotional intelligence and self-regulation are vital for healthy interpersonal communication and understanding oneself. Yet adolescence offers few safe spaces in which young people can explore the effects of their decisions without harming their social standing or emotional well-being. <em>Emotionopolis</em> was designed as that exploratory space: a game in which choices have consequences, but failure becomes information rather than social risk.</p></section>
      <section class="editorial-text-section"><h3>Two faces, one balance</h3><p>The concept was inspired by the <em>futakuchi-onna</em>, a woman in Japanese folklore with a second mouth in the back of her head. In this world, each person&rsquo;s twin faces feed on &ldquo;mood energy&rdquo; generated through interactions with people, the environment, and internal factors. Recent mysterious circumstances have offset the usual balance between the faces, and it is up to the player to discover and resolve the cause.</p></section>
      <div class="editorial-pair image-left">${figure('gangster-base.png', 'Gangster in a dark city environment with emotional-balance indicators', 'A city encounter shows the map, mood indicators, and the player&rsquo;s persistent balance meter working together.')}<div><h3>A mystery built around emotional intelligence</h3><p>The extreme emotions are the work of a criminal gang carrying out mood-energy attacks. Its leader lives in constant emotional flux after both of his faces were permanently damaged. As players follow leads and restore citizens to their natural balance, the investigation builds toward a final confrontation in which the antagonist must be rebalanced rather than defeated through force.</p></div></div>
    </div>`
  },
  {
    id: 'experience',
    label: 'Player Experience',
    content: `<div class="chapter-body tab-editorial">
      <div class="editorial-pair image-right"><div><h3>From detective office to open city</h3><p>The player begins in an office where even ordinary objects can affect emotional balance. The couch, telephone, coffee, and other environmental details become opportunities to observe how everyday choices shift the player&rsquo;s state before entering a more complex social encounter.</p></div>${figure('office-couch.png', 'Detective office with the couch highlighted in red and the player balance meter visible', 'Red identifies the selected couch while the persistent yin-yang HUD displays the detective&rsquo;s emotional balance.')}</div>
      <section class="editorial-feature"><h3>Follow the evidence</h3><p>A large board displays collected leads and clues, while the journal turns those discoveries into actionable investigation options. Players may explore the city on foot or travel directly to a recorded lead, choosing which threads to follow and how to approach each encounter.</p><div class="editorial-inline-gallery evidence-tools">${figure('evidence-board.png', 'Detective evidence board filled with photographs, reports, dates, and connected clues', 'The evidence board organizes collected leads and helps the player decide what to investigate next.')}${figure('journal-screen.png', 'Open detective journal listing a criminal profile and mysterious-letter investigation options', 'The journal translates discovered leads into options such as researching a suspect, visiting a location, or tracing a letter&rsquo;s source.')}</div></section>
      <div class="experience-grid"><article><h3>Investigate</h3><p>Observe people and environments, collect information, and decide which leads deserve attention.</p></article><article><h3>Choose</h3><p>Select context-sensitive actions, items, and dialogue shaped by acquired skills and the player&rsquo;s current emotional state.</p></article><article><h3>Adapt</h3><p>Watch both characters&rsquo; balance meters respond, revise assumptions, and carry new social skills into later encounters.</p></article></div>
      <section class="editorial-text-section"><h3>Chapters of increasing complexity</h3><p>The game is divided into chapters of increasing difficulty. Players remain free to revisit earlier areas to balance more citizens and uncover additional clues, while later chapters require strategic backtracking. Each chapter ends with a &ldquo;boss&rdquo; experiencing an especially strong emotion&mdash;such as anguish, ecstasy, or rage&mdash;that the player must successfully balance to proceed.</p></section>
      <section class="editorial-text-section"><h3>Support that fades with mastery</h3><p>Brief interventions introduce new controls and icons or assist when the player struggles. A retired detective who shares the protagonist&rsquo;s unusual abilities serves as an in-world mentor: he appears frequently early on, fades as the player demonstrates mastery, and returns when needed.</p></section>
    </div>`
  },
  {
    id: 'mechanics',
    label: 'Game Mechanics',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>Every choice changes the system</h3><p>The primary player activity is making decisions. Choices influence how other characters perceive the detective, how the story unfolds, and the emotional balance of individual citizens and the town. The available options depend on previously collected items and skills, the situation, and the player character&rsquo;s own emotional state. An action that is appropriate in one context may be hostile or intrusive in another.</p><div class="editorial-inline-gallery interaction-sequence">${figure('woman-actions.png', 'Action menu surrounding a woman encountered on a city street', 'Actions include observing, confronting, comforting, or hugging&mdash;choices whose appropriateness depends on context.')}${figure('woman-items.png', 'Item menu surrounding a woman encountered on a city street', 'Collected evidence and tools create additional ways to approach the same encounter.')}${figure('woman-dialogue.png', 'Dialogue choices displayed beside a woman encountered on a city street', 'Dialogue ranges from empathetic inquiry to aggressive questioning, making tone a consequential decision.')}</div></section>
      <div class="experience-grid"><article><h3>Decision making</h3><p>Predetermined but context-sensitive choices turn emotional analysis into consequential action.</p></article><article><h3>Self-regulation</h3><p>Players must keep their own mood energy within a healthy range; prolonged extremes produce increasingly serious consequences.</p></article><article><h3>Skills &amp; abilities</h3><p>Patterns of decisions strengthen actions and unlock new interaction options, traits, and routes through later scenarios.</p></article><article><h3>Item collection</h3><p>Objects found through exploration&mdash;such as binoculars&mdash;create new ways to gather information and approach encounters.</p></article></div>
      <section class="editorial-text-section"><h3>Balance as feedback and incentive</h3><p>Yin-yang meters make the state of NPCs and the player constantly visible. The immediate movement of these gauges connects an action with its emotional outcome. Maintaining balance over time unlocks a temporary zen-like state that enhances the player&rsquo;s capabilities, while assisting citizens can unlock new skills and improve traits essential to progress.</p></section>
    </div>`
  },
  {
    id: 'learning',
    label: 'Learning Design',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Two higher-order goals</h3><p>Learners should be able to analyze the emotional states of others and react appropriately, and regulate their own emotional state in a variety of contexts. To reach those goals, they identify factors that affect emotions, compare responses, generalize relationships between actions and emotions, predict outcomes, select appropriate actions, and adapt those actions to the needs of a context.</p></section>
      <section class="editorial-text-section"><h3>Theory of change embedded in play</h3><p>Learners demonstrate mastery by making decisions that balance the emotional state of diverse NPCs while attending to their own character&rsquo;s well-being. Each character has a slightly different natural balance state, so players must decide with whom or what to interact, how, how often, and in what order. Inappropriate decisions do not simply display a wrong-answer message; they make the desired balance more difficult to achieve.</p></section>
      <section class="editorial-text-section"><h3>Discovery, situation, observation, and story</h3><p>The mystery creates a guided-discovery loop: gather information, form hypotheses, test them through interaction, and revise an understanding of how actions and emotions relate. Situated scenarios make decisions transferable to life outside the game. Social cognitive theory informs the modeling of healthy relationship skills, while the branching narrative uses challenge, curiosity, control, and fantasy to sustain motivation.</p></section>
      <section class="editorial-text-section"><h3>Assessment without breaking the fiction</h3><p>Feedback and assessment are built directly into the mechanics. Emotional-balance meters provide a constant measure of the player and NPC states, and increasingly complex characters form the difficulty curve. Progress depends on successfully balancing emotions, so evidence of learning is produced through the same actions that move the story forward.</p></section>
    </div>`
  },
  {
    id: 'reflection',
    label: 'Reflection',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Designing one coherent metaphor</h3><p>The strongest part of <em>Emotionopolis</em> is the way its pieces reinforce one another. The two-faced citizens, yin-yang interface, grayscale world, branching mystery, and mood-energy system all make duality and balance tangible. Color is used sparingly as information: the player&rsquo;s unusual perception makes red a cue for selections, possible interactions, and narrative progression.</p></section>
      <section class="editorial-text-section"><h3>Collaboration through complementary strengths</h3><p>Yael Ezer and I shared ideation, design, writing, feedback, and revision across the project. We also divided work according to our strengths: Yael concentrated on game mechanics and scenarios, while I created the graphics and interactive prototype. That combination helped the learning model survive the transition from document to playable interface.</p></section>
      <section class="editorial-text-section"><h3>What I would test next</h3><p>The design document proposed think-aloud playtesting and reflective interviews to evaluate the visual design and mechanics, followed by pre- and post-transfer tasks to test whether players could apply emotional knowledge beyond the game. Further research would examine how avatar choice affects decisions and whether adolescents with Autism Spectrum Disorder can transfer the game&rsquo;s representations of emotion to real-world settings.</p></section>
      <section class="editorial-text-section"><h3>What remained beyond the prototype</h3><p>The prototype demonstrates a compelling interaction language, but the larger claims require testing with the intended audience. A next iteration would validate whether the two-face metaphor is clear and sensitive, whether balance risks oversimplifying emotion, and whether scaffolding supports learners with different socio-emotional needs without reducing productive exploration.</p></section>
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
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
