const A = document.body.dataset.assetBase || '../assets/images/project-gallery/peers/';
const figure = (file, alt, caption) => `<figure class="tab-media-figure"><button class="media-magnify tab-media-frame" type="button" data-full="${A}${file}" data-alt="${alt}" data-caption="${caption}" aria-label="Enlarge image: ${alt}"><img src="${A}${file}" alt="${alt}" loading="lazy" decoding="async"><span aria-hidden="true"></span></button><figcaption>${caption}</figcaption></figure>`;

const chapters = [
  {
    id: 'problem',
    label: 'The Problem',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>From institutional inclusion to individual relationships</h3><p>The project began with expansive questions about race, diversity, and positive identity formation among younger learners. Observations and reflection revealed that the problem was too broad, its causes too entangled, and the proposed interventions too vague. The team shifted from macro-level initiatives to the small-group relationships through which identity is experienced and developed.</p></section>
      <section class="editorial-text-section"><h3>A more actionable design challenge</h3><p>Higher-education institutions may offer diversity initiatives, workshops, and multicultural events without producing meaningful shifts in everyday student behavior. Minority students can still struggle to form positive views of self within nominally supportive environments. The resulting question became: given that identity is shaped through relationships, how might institutions foster meaningful student relationships that build positive identity?</p></section>
      <section class="editorial-text-section"><h3>Designing for connection, not connection counts</h3><p>The goal was never to accumulate visible contacts. The app needed to create enough initial common ground for students to interact across differences, then encourage them to move beyond the screen and connect through campus activities and face-to-face conversation.</p></section>
    </div>`
  },
  {
    id: 'research',
    label: 'Research',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>The assumptions did not survive contact with users</h3><p>Surveys and interviews with 62 potential users examined how students described themselves, formed friendships, and viewed their institution&rsquo;s role in supporting connection. The team expected race and culture to dominate self-identification. Instead, participants emphasized mental characteristics, personality, and interests, while race and religion consistently ranked among the least important factors in describing oneself.</p><div class="metric-grid research-metrics"><div class="metric"><strong>62</strong><span>Participants in the initial surveys and interviews</span></div><div class="metric"><strong>2</strong><span>Insights that redirected solution ideation</span></div><div class="metric"><strong>29</strong><span>Participants in later prototype testing and reflection</span></div></div></section>
      <section class="editorial-text-section"><h3>Similarity starts the conversation; difference sustains it</h3><p>Shared interests and personality traits often sparked interaction, but students also valued different interests, opinions, and perspectives. They preferred friends who challenged their thinking over friends who merely reinforced it. Few characteristics were absolute deal-breakers once a sufficient connection had formed.</p></section>
      <section class="editorial-text-section"><h3>The constraint was time, not opportunity</h3><p>Students generally believed campuses offered sufficient organizations and events. What they lacked was time in the same physical space. Work, family, coursework, and other obligations constrained their ability to socialize. Two design criteria emerged: connect people through similar but not identical interests, and reduce dependence on shared schedules and locations.</p></section>
    </div>`
  },
  {
    id: 'concept',
    label: 'Product Concept',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>Interest first, identity later</h3><p>Accounts would be institutionally verified, but public profiles would initially omit names, photographs, and demographic data. Students would browse interests and hobbies, indicate whether they wanted to pair, and unlock chat only after mutual interest. Once paired, each person could choose whether to share a name or photo.</p><div class="editorial-inline-gallery phone-gallery two-up">${figure('final-random-profile.png', 'Peers random profile screen showing initials surrounded by interest icons', 'Random mode offered a low-pressure way to encounter an interest-only profile and choose Pair or Pass.')}${figure('final-pair-profile.png', 'Matched Peers profile with controls for sharing a name, photo, or tagline', 'After pairing, users retained control over which identity details they revealed.')}</div></section>
      <section class="editorial-text-section"><h3>From digital discovery to campus life</h3><p>Suggested events, a campus calendar, and institution-specific organizations gave students a reason to turn a match into an activity. Chat intentionally omitted features such as photo and location sharing that might keep interaction inside the app or introduce additional safety concerns.</p></section>
      <section class="editorial-text-section"><h3>A concept shaped through multiple lenses</h3><p>A persona and journey map revealed coordination needs such as event suggestions and calendar sync. A &ldquo;bags of stuff&rdquo; ideation method produced more speculative ideas, including proximity-based auto-matching inspired by Nintendo StreetPass. These features became hypotheses to test rather than assumptions to protect.</p></section>
    </div>`
  },
  {
    id: 'iterate',
    label: 'Test &amp; Iterate',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>Testing the first complete prototype</h3><p>Photoshop mockups were connected into an interactive Prott prototype. Eight participants completed Think Aloud sessions, and another 21 submitted reflective surveys. The theme was well received, but users exposed substantial problems in the registration flow, interest selection, browsing model, feature clarity, and institutional context.</p></section>
      <div class="editorial-pair image-left">${figure('v1-interest-setup.png', 'Early Peers setup screen with interests arranged in a circular menu', 'The original circular selector looked consistent with the finished profile, but users did not know where to begin.')}<div><h3>Make the first action obvious</h3><p>During registration, many testers clicked the surrounding interest placeholders rather than the central &ldquo;Interest Menu.&rdquo; The redesign replaced this circular setup control with a straightforward category menu, then returned to the signature ring only when previewing the completed public profile. Privacy choices also moved into onboarding so students could decide what others would see before the profile became visible.</p></div></div>
      <div class="editorial-pair image-right"><div><h3>Consolidate the path to a peer</h3><p>The first version offered too many overlapping ways to browse and retrieve profiles. Random profiles were popular because they felt casual, but Browse, Search, Suggestions, and Auto-Matching created repetition and ambiguity. The redesign combined Random, Suggestions, and Search into one clearly labeled Find Peers screen and added explanatory text where the function was not self-evident.</p></div>${figure('v1-find-friends.png', 'Early Find Friends menu with four large navigation choices', 'Version 1 separated overlapping discovery modes into repetitive screens and buttons.')}</div>
      <section class="editorial-text-section"><h3>Clarify the product&rsquo;s boundaries</h3><p>Users were uncertain whether the app served the public, one school, or multiple institutions&mdash;and whether it was for new friendships, existing friends, or class projects. Prototype 2.0 tied registration to institutional email, introduced school-specific themes, added first-time guidance, and made campus events a distinct destination.</p></section>
    </div>`
  },
  {
    id: 'final',
    label: 'Final Experience',
    content: `<div class="chapter-body tab-editorial">
      <section class="editorial-text-section"><h3>A simpler route from discovery to interaction</h3><p>The final prototype contained more than 120 screens. Find Peers consolidated the discovery modes, My Pairs collected existing matches, Messages made conversation easier to resume, and Events gained a dedicated calendar destination. Profiles and chats were combined into a two-toggle view so users could move between common interests and conversation without losing context.</p><div class="editorial-inline-gallery phone-gallery">${figure('final-suggestions.png', 'Peers suggestions screen listing potential matches and compatibility percentages', 'Suggestions presented potential peers, shared interests, and matching strength in one scannable list.')}${figure('final-messages.png', 'Peers messages screen listing recent conversations', 'A dedicated message list kept existing conversations separate from discovering new peers.')}${figure('final-pair-profile.png', 'Matched Peers profile with selective identity-sharing controls', 'The matched profile paired conversation access with granular, voluntary identity sharing.')}</div></section>
      <section class="video-section"><h3>Walking through the final concept</h3><p>The overview video demonstrates the institutional framing, core matching flow, and visual system across the broader prototype.</p><iframe class="media-frame" src="https://www.youtube-nocookie.com/embed/i98C1ze1xHM" title="Peers project overview" loading="lazy" allowfullscreen></iframe></section>
    </div>`
  },
  {
    id: 'reflection',
    label: 'Reflection',
    content: `<div class="chapter-body tab-editorial tab-text-led">
      <section class="editorial-text-section"><h3>The research changed the destination</h3><p>The most important decision was abandoning the initial problem framing. The team did not force observations about identity and diversity into a solution for younger learners. Instead, continued reflection and research revealed a more specific opportunity in higher education: relationships, shared interests, and the practical constraints that keep students apart.</p></section>
      <section class="editorial-text-section"><h3>Positive reactions did not erase usability problems</h3><p>Testers liked the name, logo, privacy premise, randomizer, QR connection, and overall &ldquo;friends rather than dating&rdquo; concept. That enthusiasm could easily have masked confusion about the product&rsquo;s audience, purpose, and navigation. The redesign treated comprehension as a prerequisite for appeal.</p></section>
      <section class="editorial-text-section"><h3>Privacy was part of the interaction model</h3><p>Restricting identity details was not merely a settings feature; it was central to reducing preconceptions and creating safer contact. Testing showed that users wanted those choices earlier and in greater detail. A real deployment would require continuous monitoring, transparent institutional data policies, strong reporting and blocking controls, and removal of any feature that caused harm even if other users enjoyed it.</p></section>
      <section class="editorial-text-section"><h3>What remained unproven</h3><p><em>Peers</em> depends on a sufficiently large and engaged campus population. More importantly, matches and messages are not evidence of meaningful relationships. A future study would need to evaluate whether users actually met, maintained contact, developed stronger campus belonging, or engaged with people they might otherwise have overlooked.</p></section>
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
