const A = document.body.dataset.assetBase || '../assets/images/project-gallery/french-vowels/';
const figure = (file, alt, caption, className = '') => `<figure class="tab-media-figure ${className}"><button class="media-magnify tab-media-frame" type="button" data-full="${A}${file}" data-alt="${alt}" data-caption="${caption}" aria-label="Enlarge image: ${alt}"><img src="${A}${file}" alt="${alt}" loading="lazy" decoding="async"><span aria-hidden="true"></span></button><figcaption>${caption}</figcaption></figure>`;

const chapters = [
  {
    id: 'problem',
    label: 'The Problem',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Pronunciation resources leave a missing link</h3><p>For many second-language learners, wrapping one&rsquo;s mouth&mdash;and mind&mdash;around a new set of sounds is one of the most difficult parts of learning. Textbooks may introduce the International Phonetic Alphabet, but novice learners can be overwhelmed by complex charts and articulatory terminology. Even when instruction is distributed across a course, it often stops at textual explanations and audio examples. Learners hear a sound and see a symbol without seeing how to produce it.</p></section>
      <section class="editorial-text-section"><h3>A focused alternative to an all-inclusive IPA tool</h3><p>Rather than demonstrate every possible human phoneme, the prototype concentrates on the sixteen vowel sounds used in French. It is best suited to learners who already have some familiarity with IPA or vowel qualities: advanced students refining pronunciation, novices who have received pre-training, or phonetics students examining a French-specific system. Instructors can also integrate it into guided activities.</p></section>
      <section class="editorial-text-section"><h3>What existing tools did not offer</h3><p>Flashcards and clickable IPA charts connect symbols with sounds. Speech-therapy applications may add anatomical images, animation, or recording. But the reviewed tools did not give learners direct control over a mouth model so they could change articulatory inputs, see the physical relationship, and hear the resulting French vowel. That missing control became the design opportunity.</p></section>
    </div>`
  },
  {
    id: 'interaction',
    label: 'Interaction Model',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>Control inputs; discover outputs</h3><p>The goal was to create an actual simulation in which users do not simply click symbols to hear sounds, but control inputs in order to discover resulting outputs. A vertical slider changes vowel height, a horizontal slider changes frontness, and checkboxes toggle roundedness and nasality. When the selected combination produces a French phonemic vowel, its IPA symbol appears in the corresponding location and the audio plays automatically. Invalid combinations produce an explanatory message.</p><div class="interaction-demo-grid">${figure('simulation-interface.png', 'French vowel simulation with a mouth profile, vowel quadrilateral, two sliders, and roundedness and nasality controls', 'The model places the IPA symbol inside a mouth-shaped vowel quadrilateral while four controls expose the articulatory variables.', 'interface-overview')}<div class="experience-grid interaction-features"><article><h3>Height</h3><p>Move from high to low vowel positions with the vertical slider.</p></article><article><h3>Frontness</h3><p>Move from front to central to back articulation with the horizontal slider.</p></article><article><h3>Roundedness</h3><p>Toggle whether the lips are rounded for the selected vowel.</p></article><article><h3>Nasality</h3><p>Toggle oral and nasal production to compare related French sounds.</p></article></div></div></section>
      <section class="editorial-text-section"><h3>Immediate, coordinated feedback</h3><p>The interface presents place and manner of articulation, aural recognition, and IPA symbol at the same moment. This simultaneity lets learners compare phonetically similar sounds by changing a single quality, then immediately hearing and seeing what changed.</p></section>
    </div>`
  },
  {
    id: 'build',
    label: 'The Build',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Prototyping a simulation in Storyline</h3><p>The original concept called for cartoon-style articulators that learners could manipulate directly while a continuous vowel changed in real time. Time, technical constraints, and the available authoring environment required a more discrete implementation. Articulate Storyline supplied states, variables, and triggers that could approximate the intended cause-and-effect model without custom programming.</p></section>
      <section class="editorial-text-section"><h3>Sixteen states and 192 triggers</h3><p>Each vowel has a unique state containing its position on the quadrilateral, IPA symbol, and audio file. Every change to a slider or checkbox checks the four current values against the conditions assigned to those states. Storyline&rsquo;s trigger model required 192 individually configured triggers to cover the possible changes and activate the correct output.</p>${figure('storyline-states-triggers.png', 'Articulate Storyline workspace showing French vowel states and a long trigger panel', 'The Storyline workspace exposes the state library below the canvas and the conditional trigger logic at right.', 'build-view')}</section>
      <section class="editorial-text-section"><h3>Minimalism as a production decision</h3><p>Because the priority was a functioning prototype within the allotted time, the visual design remained intentionally spare. A two-dimensional human profile frames the quadrilateral, and the controls align directly with its axes. Storyline could publish the result to browser and mobile formats or package it for an LMS, making the interaction portable despite the constrained implementation.</p><p><a class="button" href="https://rise.articulate.com/share/GHcajnEV3MtBFvkClPMUlGOzqz_b1-Kl#/lessons/hSx59k02E6rlExsbEv_wzj4My_ZjbwGW?_k=p6upyk">Try the prototype &rarr;</a></p></section>
    </div>`
  },
  {
    id: 'learning',
    label: 'Learning Design',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>Two learning objectives</h3><p>First, learners should be able to identify French vowels through three connected forms: articulatory qualities, aural recognition, and IPA symbol. Second, learners should be able to reproduce French vowel sounds accurately. The prototype directly supports identification and exploration; reproduction remains an implied goal because recording and objective pronunciation assessment are not yet built in.</p></section>
      <section class="editorial-text-section"><h3>Discovery with visible causality</h3><p>The open-ended design encourages learners to manipulate the model and construct knowledge through exploratory interaction. Every change in input produces immediate feedback, making the relationship between learner action and system response readily discernible. With instructor framing or prior instruction, the same experience can move from pure discovery toward guided discovery.</p></section>
      <section class="editorial-text-section"><h3>Coordinating words, pictures, position, and sound</h3><p>The simulation mixes visual and verbal representations so learners can integrate them into an existing understanding of speech production. Audio samples are paired with symbols and spatial positions, following dual-coding principles. Spatial proximity connects the symbol to its place of articulation, while immediate audio supplies temporal proximity. Limiting simultaneous information and placing controls beside their corresponding axes reduces unnecessary cognitive load.</p></section>
      <section class="editorial-text-section"><h3>Learner control manages complexity</h3><p>Unlike fixed video, the sliders and checkboxes let learners control both sequence and pace. Novices can concentrate on initial sound-symbol and spatial relationships, while advanced learners can explore finer contrasts such as front rounded vowels and nasality.</p></section>
    </div>`
  },
  {
    id: 'future',
    label: 'Looking Forward',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>From discrete states to living articulation</h3><p>A stronger version would replace the still mouth with animation or key frames showing how the articulators move. Instead of separate controls, learners could manipulate anatomical structures directly&mdash;dragging the tongue, rounding the lips, or changing the velum position&mdash;while hearing a continuous vowel change in real time.</p></section>
      <section class="editorial-text-section"><h3>From reference tool to pronunciation coach</h3><p>Recording and replay would support self-evaluation or instructor review. A more advanced system could compare a learner&rsquo;s audio with acceptable parameters and display the difference through an accessible visual representation, transforming the simulation into a digital coach that guides correction rather than only modeling a target.</p></section>
      <section class="editorial-text-section"><h3>More guidance, without more jargon</h3><p>Pre-training and contextual guidance would help novices understand the controls before exploring. That instruction should avoid unnecessary formal language, establishing an approachable foundation that can later support more precise terminology. A relatable pedagogical agent could model pronunciation, explain concepts, and sustain a positive emotional tone as the experience grows.</p></section>
      <section class="editorial-text-section"><h3>What the prototype proved</h3><p>The prototype succeeds at its core claim: learners can manipulate four articulatory inputs and immediately change the visual and auditory output for sixteen French vowels. It also makes its own boundary visible. The interaction is a useful reference and proof of concept, but accurate pronunciation remains unassessed until future versions can listen and respond to the learner.</p></section>
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
