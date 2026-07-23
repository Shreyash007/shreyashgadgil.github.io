---
permalink: /
title: "Shreyash Gadgil"
description: "Shreyash Gadgil is a roboticist and researcher working on robotic manipulation, autonomous systems, machine learning, and lithium-ion battery recycling."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-hero home-hero--cinematic" data-hero-stage data-hero-interval="6200" aria-label="Homepage introduction">
  <div class="home-hero__copy">
    <p class="home-hero__eyebrow">Roboticist</p>
    <h1>I build robots that sense, move, and work in the real world.</h1>
    <p class="home-hero__lede">I'm Shreyash Gadgil, a roboticist working across manipulation, autonomous systems, mechanical design, and machine learning pipelines. I like building systems that leave the lab notebook and survive contact with real hardware, sensors, tolerances, and people.</p>
    <div class="home-hero__signals" aria-label="Selected areas of work">
      <span>Robotic manipulation</span>
      <span>Autonomous systems</span>
      <span>Mechatronics</span>
      <span>ML for robotics</span>
    </div>
    <div class="home-actions">
      <a class="home-action" href="{{ base_path }}/work/">View projects</a>
      <a class="home-action" href="mailto:shreyashgadgil007@gmail.com">Contact me</a>
    </div>
  </div>

  <aside class="home-hero__showcase" aria-live="polite">
    <div class="home-hero__visual">
      <img src="{{ base_path }}/images/3-finger-grasp-planning/hardware_setup.png" alt="UR5e and Robotiq three-finger gripper hardware setup" data-hero-image>
    </div>
    <div class="home-hero__shade" aria-hidden="true"></div>
  </aside>

  <div class="home-hero__caption">
    <span data-hero-kicker>Robotic manipulation</span>
    <h2 data-hero-title>Learning-based grasp planning</h2>
    <p data-hero-text>A UR5e, RGB-D perception, and a three-finger gripper brought into the same execution loop.</p>
  </div>

  <div class="home-hero__controls">
    <button class="home-hero__button" type="button" data-hero-prev aria-label="Previous scene">&#8592;</button>
    <div class="home-hero__dots" data-hero-dots aria-label="Scene selector"></div>
    <button class="home-hero__button" type="button" data-hero-next aria-label="Next scene">&#8594;</button>
  </div>
  <div class="home-hero__progress" aria-hidden="true"><span data-hero-progress></span></div>

  <script type="application/json" data-hero-slides>
    [
      {
        "src": "{{ base_path }}/images/3-finger-grasp-planning/hardware_setup.png",
        "alt": "UR5e and Robotiq three-finger gripper hardware setup",
        "position": "center center",
        "kicker": "Robotic manipulation",
        "title": "Learning-based grasp planning",
        "text": "A UR5e, RGB-D perception, and a three-finger gripper brought into the same execution loop."
      },
      {
        "src": "{{ base_path }}/images/battery_disassembly/Setup.jpg",
        "alt": "UR5e robot and semi-autonomous battery disassembly setup",
        "position": "center center",
        "kicker": "Human-robot collaboration",
        "title": "Semi-autonomous battery disassembly",
        "text": "A direct-recycling workflow that pairs robotic handling with a purpose-built pouch-cell mechanism."
      },
      {
        "src": "{{ base_path }}/images/talks/teaching_kids_2.jpg",
        "alt": "Teaching robotics concepts in a classroom",
        "position": "center center",
        "kicker": "Teaching through systems",
        "title": "Hands-on robotics sessions",
        "text": "Demos, tools, and classroom systems that make abstract motion feel concrete."
      },
      {
        "src": "{{ base_path }}/images/battery_disassembly/Mechanism%20description.jpg",
        "alt": "Three-stage pouch-cell disassembly mechanism with grippers, cutter, DC motor, and linear actuator",
        "position": "center center",
        "kicker": "Mechanism design",
        "title": "Purpose-built disassembly hardware",
        "text": "A three-stage mechanism for securing, cutting, and extracting electrode stacks from pouch-cell mockups."
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
