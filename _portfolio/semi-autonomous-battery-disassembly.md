---
title: "Semi-Autonomous Battery Disassembly"
excerpt: "A human-robot collaboration system for safer, more efficient direct recycling of lithium-ion pouch cells."
collection: portfolio
permalink: /portfolio/semi-autonomous-battery-disassembly/
header:
  teaser: battery_disassembly/Setup.jpg
---

{% include base_path %}

Lithium-ion battery recycling often relies on shredding or hazardous manual disassembly. This project explored a direct-recycling alternative that combines human adaptability, robotic manipulation, and a purpose-built mechanism for opening pouch cells and extracting the electrode stack.

<figure>
  <img src="{{ base_path }}/images/battery_disassembly/Setup.jpg" alt="UR5e robot and full semi-autonomous battery disassembly setup">
  <figcaption>UR5e-based semi-autonomous disassembly setup, including the robotic handling station and the dedicated pouch-cell disassembly mechanism.</figcaption>
</figure>

## Problem

Direct recycling can preserve more material value than destructive shredding, but lithium-ion batteries are difficult to handle safely because modules, covers, tabs, and pouch cells can vary in geometry and condition. Fully manual disassembly also exposes workers to repetitive operations and potentially hazardous components.

The system was designed around a semi-autonomous workflow: keep the human operator in the loop for variable, judgment-heavy steps, and automate the repeated pouch-cell handling and separation operations.

## Semi-Autonomous Workflow

A human operator removes fragile covers and handles variable preparation steps. The battery module is then localized using an AprilTag, allowing the robot to plan around the module pose and retrieve pouch cells in a repeatable way.

The robotic workflow combines:

- **Perception:** AprilTag-based module localization from an overhead camera.
- **Manipulation:** UR5e motion planning and grasp execution through ROS and MoveIt.
- **Transfer:** Robot-assisted placement of individual pouch cells into the disassembly mechanism.
- **Mechanism control:** Arduino coordination for grippers, motors, sensors, and limit switches.

<figure>
  <img src="{{ base_path }}/images/battery_disassembly/battery_cumulative.jpg" alt="Battery module, tabs, and AprilTag-localized battery mockup">
  <figcaption>Battery module and fabricated test setup showing the module structure, anode and cathode tabs, and AprilTag used for localization.</figcaption>
</figure>

## Three-Stage Mechanism

The custom mechanism was built to automate the pouch-cell disassembly sequence after robot placement. It separates the operation into three stages:

- **Stage 1:** Servo-driven grippers detect, receive, and secure the incoming pouch cell.
- **Stage 2:** A DC-motor-driven cutter positions and opens the pouch casing.
- **Stage 3:** A linear actuator and gripper extract the electrode stack from the opened pouch.

<figure>
  <img src="{{ base_path }}/images/battery_disassembly/Mechanism%20description.jpg" alt="Three-stage pouch-cell disassembly mechanism with grippers, cutter, DC motor, and linear actuator">
  <figcaption>Three-stage disassembly mechanism: Stage 1 secures the pouch cell, Stage 2 cuts the pouch, and Stage 3 extracts the electrode stack using a linear actuator and gripper.</figcaption>
</figure>

## Prototype Battery and Pouch Cell

To test the workflow safely, we designed and fabricated an equivalent battery module rather than relying on live cells. The prototype used aluminium and copper foils, polypropylene separators, composite pouch material, 3D-printed module parts, and an acrylic enclosure.

The pouch-cell mockups preserved the handling features needed by the robotic system, including tabs, outer covering, layer stack geometry, and module placement constraints.

<figure>
  <img src="{{ base_path }}/images/battery_disassembly/pouch_cell_cumulative.jpg" alt="Pouch-cell layer stack with separator, cathode, anode, outer covering, and fabricated cell mockups">
  <figcaption>Pouch-cell construction used for safe validation, including the separator, cathode, anode, outer covering, and fabricated pouch-cell mockups.</figcaption>
</figure>

## Outcome

The proof-of-concept completed the full workflow, from human cover removal to electrode-stack extraction, in an average of four minutes. The project demonstrated how semi-autonomous direct recycling can reduce repetitive manual exposure while retaining more material value than destructive shredding.

## Publication

This work was published at ICEMPS 2024:

S. Gadgil, D. Gaikwad, B. Sebastian, A. Dubey and A. Upadhyay, "Semi-Autonomous Robotic System for Efficient Recycling of Lithium-Ion Batteries," 2024 International Conference on E-mobility, Power Control and Smart Systems (ICEMPS), Thiruvananthapuram, India, 2024, pp. 1-7, doi: [10.1109/ICEMPS60684.2024.10559331](https://doi.org/10.1109/ICEMPS60684.2024.10559331).

[Download the paper]({{ base_path }}/images/battery_disassembly/Semi_Autonomous_Robotic_system_for_efficient_recycling_of_Lithium_Ion_Batteries.pdf)

## Tools

`ROS` | `MoveIt` | `UR5e` | `AprilTag` | `Arduino` | `CAD` | `3D printing` | `Mechatronics` | `Human-robot collaboration`
