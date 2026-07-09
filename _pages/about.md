---
permalink: /
title: "Shreyash Gadgil"
description: "Shreyash Gadgil is a robotics engineer and researcher working on robotic manipulation, autonomous systems, machine learning, and lithium-ion battery recycling."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-hero" data-hero-stage data-hero-interval="7200" aria-label="Homepage introduction">
  <div class="home-hero__copy">
    <p class="home-hero__eyebrow">Robotics, manipulation, and physical systems</p>
    <h1>Building robotic systems that move from lab ideas to real hardware.</h1>
    <p class="home-hero__lede">I work on robotic manipulation, autonomous systems, mechanical design, and machine-learning pipelines for machines that need to behave reliably in the physical world.</p>
    <div class="home-hero__signals" aria-label="Selected areas of work">
      <span>Manipulation</span>
      <span>Autonomy</span>
      <span>Prototyping</span>
    </div>
    <div class="home-actions">
      <a class="home-action" href="{{ base_path }}/work/">View projects</a>
      <a class="home-action" href="mailto:shreyashgadgil007@gmail.com">Contact me</a>
    </div>
  </div>

  <aside class="home-hero__showcase" aria-live="polite">
    <div class="home-hero__visual">
      <img src="{{ base_path }}/images/talks/teaching_kids_2.jpg" alt="Teaching robotics concepts in a classroom" data-hero-image>
    </div>
    <div class="home-hero__shade" aria-hidden="true"></div>
    <div class="home-hero__caption">
      <span data-hero-kicker>Teaching through systems</span>
      <h2 data-hero-title>Hands-on robotics sessions</h2>
      <p data-hero-text>Demos, tools, and classroom systems that make abstract motion feel concrete.</p>
    </div>
    <div class="home-hero__controls">
      <button class="home-hero__button" type="button" data-hero-prev aria-label="Previous scene">&#8592;</button>
      <div class="home-hero__dots" data-hero-dots aria-label="Scene selector"></div>
      <button class="home-hero__button" type="button" data-hero-next aria-label="Next scene">&#8594;</button>
    </div>
    <div class="home-hero__progress" aria-hidden="true"><span data-hero-progress></span></div>
  </aside>

  <script type="application/json" data-hero-slides>
    [
      {
        "src": "{{ base_path }}/images/talks/teaching_kids_2.jpg",
        "alt": "Teaching robotics concepts in a classroom",
        "kicker": "Teaching through systems",
        "title": "Hands-on robotics sessions",
        "text": "Demos, tools, and classroom systems that make abstract motion feel concrete."
      },
      {
        "src": "{{ base_path }}/images/3-finger-grasp-planning/hardware_setup.png",
        "alt": "UR5e and Robotiq three-finger gripper hardware setup",
        "kicker": "Robotic manipulation",
        "title": "Learning-based grasp planning",
        "text": "A UR5e, RGB-D perception, and a three-finger gripper brought into the same execution loop."
      },
      {
        "src": "{{ base_path }}/images/talks/battery_disassembly.jpg",
        "alt": "Presenting semi-autonomous battery disassembly work",
        "kicker": "Physical prototypes",
        "title": "Robots meeting messy hardware",
        "text": "Mechanisms, fixtures, sensors, and workflows tested outside the comfort of simulation."
      },
      {
        "src": "{{ base_path }}/images/art/street_landscape.jpg",
        "alt": "Colorful street landscape painting",
        "kicker": "Creative observation",
        "title": "Sketchbook practice",
        "text": "Color, framing, and attention as a quiet counterpart to engineering judgment."
      }
    ]
  </script>
</section>

<section class="home-section">
  <p class="section-kicker">What I Work Across</p>
  <div class="identity-grid home-focus-grid">
    <article class="identity-card home-focus-card"><span class="identity-card__number">01</span><h2>Robotic systems</h2><p>Manipulation, autonomy, sensing, and motion.</p></article>
    <article class="identity-card home-focus-card"><span class="identity-card__number">02</span><h2>Physical prototypes</h2><p>Mechanisms, experiments, validation, and deployment.</p></article>
    <article class="identity-card home-focus-card"><span class="identity-card__number">03</span><h2>Creative observation</h2><p>Art, reading, teaching, and framing problems clearly.</p></article>
  </div>
</section>

<section class="home-section home-section--compact">
  <p class="section-kicker">Explore</p>
  <div class="home-route-grid">
    <a class="home-route" href="{{ base_path }}/publications/"><strong>Research</strong><span>Publications, patents, and theses</span></a>
    <a class="home-route" href="{{ base_path }}/work/"><strong>Projects & Notes</strong><span>Robotics, design, experiments, and writing</span></a>
    <a class="home-route" href="{{ base_path }}/talks/"><strong>Talks</strong><span>Presentations and teaching</span></a>
    <a class="home-route" href="{{ base_path }}/art/"><strong>Art</strong><span>Paintings, sketches, and studies</span></a>
  </div>
</section>
