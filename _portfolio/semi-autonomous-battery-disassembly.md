---
title: "Semi-Autonomous Battery Disassembly"
excerpt: "A human-robot collaboration system for safer, more efficient direct recycling of lithium-ion pouch cells."
collection: portfolio
permalink: /portfolio/semi-autonomous-battery-disassembly/
header:
  teaser: 500x300.png
---

{% include base_path %}

Lithium-ion battery recycling often relies on shredding or hazardous manual disassembly. This project explored a direct-recycling alternative that combines human adaptability, robotic manipulation, and a purpose-built mechanism.

<div class="project-image-placeholder"><div><strong>Hero image placeholder</strong><span>Add a wide photograph of the complete UR5e and disassembly setup.</span></div></div>

## The system

A human operator removes fragile covers and variable components. An overhead calibrated camera localizes an AprilTag on the battery, allowing a UR5e manipulator to retrieve individual pouch cells and deliver them to a three-stage disassembly mechanism.

The custom mechanism:

- Detects and secures the incoming pouch cell using servo-driven grippers.
- Positions and cuts the pouch with an industrial cutter.
- Extracts the electrode stack with a linear actuator and gripper.
- Coordinates sensors, limit switches, and actuators through an Arduino.

Motion and grasp planning were implemented with ROS and MoveIt. To test safely, we designed and fabricated an equivalent battery with aluminium and copper foils, polypropylene separators, composite pouches, 3D-printed parts, and an acrylic enclosure.

## Outcome

The proof-of-concept completed the full workflow, from human cover removal to electrode-stack extraction, in an average of four minutes. It demonstrated how semi-autonomous direct recycling could reduce worker exposure while retaining more material value than destructive shredding.

<div class="project-image-placeholder"><div><strong>Process image placeholder</strong><span>Add a sequence showing cell grasping, cutting, and electrode-stack extraction.</span></div></div>

## Tools

`ROS` | `MoveIt` | `UR5e` | `AprilTag` | `Arduino` | `CAD` | `3D printing` | `Mechatronics`
