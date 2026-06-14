---
title: "Grasp Planning for Three-Finger Grippers"
excerpt: "A triangular grasp representation and deep-learning pipeline for fast, RGB-D-based grasp prediction."
collection: portfolio
permalink: /portfolio/three-finger-grasp-planning/
header:
  teaser: 500x300.png
---

{% include base_path %}

Most learning-based grasp planners use a rectangular representation designed for parallel-jaw grippers. Three-finger grippers support a wider range of pinch, basic, and enveloping grasps, so this project introduced a representation tailored to their geometry.

<div class="project-image-placeholder"><div><strong>Representation diagram placeholder</strong><span>Add the triangular grasp notation overlaid on the Robotiq three-finger gripper.</span></div></div>

## Approach

The proposed `SE(3) + triangle` representation captures the gripper palm pose and the triangle formed by its fingertips. For an underactuated symmetric gripper, this can be reduced to position, orientation, and grasp width.

I helped develop an end-to-end pipeline that:

- Generated synthetic RGB, depth, and point-cloud data in Blender.
- Used objects from the Extended Grasping Analysis Dataset.
- Generated ideal three-finger grasps with GraspIt!.
- Trained a modified ResNet50 to predict grasp poses from RGB-D input.
- Validated predictions in PyBullet and on physical hardware.

## Results

The model was evaluated using a UR5e, a Robotiq three-finger adaptive gripper, an Intel RealSense D455, and MoveIt. Predictions took approximately **15 ms**, compared with roughly **20 seconds** for analytical grasp generation in GraspIt! on the reported hardware.

Across 27 validation objects that produced stable grasps under both approaches, ten learned grasps achieved a higher epsilon grasp-quality metric than their GraspIt! counterpart. Hardware trials also demonstrated successful sim-to-real transfer.

<div class="project-image-placeholder"><div><strong>Hardware results placeholder</strong><span>Add RGB-D input, predicted triangle, motion plan, and successful grasp images.</span></div></div>

## Tools

`PyTorch` | `ResNet50` | `Blender` | `GraspIt!` | `PyBullet` | `ROS` | `MoveIt` | `UR5e` | `RealSense D455`
