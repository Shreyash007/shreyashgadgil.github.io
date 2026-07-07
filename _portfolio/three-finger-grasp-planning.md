---
title: "Grasp Planning for Three-Finger Grippers"
excerpt: "A triangular grasp representation and deep-learning pipeline for fast, RGB-D-based grasp prediction."
collection: portfolio
permalink: /portfolio/three-finger-grasp-planning/
header:
  teaser: 3-finger-grasp-planning/Overall_pipeline.png
---

{% include base_path %}

Most learning-based grasp planners use a rectangular representation designed for parallel-jaw grippers. Three-finger grippers support a wider range of pinch, basic, and enveloping grasps, so this project introduced a representation tailored to their geometry.

<figure>
  <img src="{{ base_path }}/images/3-finger-grasp-planning/Triangular%20notation.png" alt="Triangular grasp notation for a three-finger gripper">
  <figcaption>Triangular grasp notation for representing fingertip contacts on a three-finger gripper.</figcaption>
</figure>

## Approach

The proposed `SE(3) + triangle` representation captures the gripper palm pose and the triangle formed by its fingertips. For an underactuated symmetric gripper, this can be reduced to position, orientation, and grasp width.

I developed an end-to-end dataset, learning, simulation, and execution pipeline that:

- Generated synthetic RGB-D data in Blender using objects from the Extended Grasping Analysis Dataset.
- Generated three-finger grasp labels with GraspIt!.
- Stored fingertip triangle coordinates, gripper pose, joint values, and grasp-quality metrics in CSV files.
- Trained CNN-based grasp-prediction models from RGB-D input.
- Evaluated predicted grasps in PyBullet before executing them through ROS and MoveIt on physical hardware.

<figure>
  <img src="{{ base_path }}/images/3-finger-grasp-planning/Overall_pipeline.png" alt="Overall pipeline for RGB-D based three-finger grasp planning">
  <figcaption>Overall pipeline from RGB-D perception and grasp prediction to simulation and hardware execution.</figcaption>
</figure>

## Dataset and Code

Code repository: [ASL-IITM/3finger_gripper_grasp_planning](https://github.com/ASL-IITM/3finger_gripper_grasp_planning)

The repository is organized around data generation, learning, and validation:

- `Blender files`: RGB-D image creation setup.
- `Grasp planning network`: dataloaders, CNN architectures, loss/accuracy utilities, masking scripts, and prediction code.
- `PyBullet grasp quality setup`: simulation script for evaluating grasp quality.
- `setup_videos`: hardware setup images and trial videos.

The dataset includes separate train and evaluation splits. Each split contains object meshes, RGB images, depth images, masked RGB/depth images, and a merged CSV file containing the best grasp entry for each sample.

Each CSV row stores the gripper pose, quaternion, lateral joint values, grasp width, epsilon and volume quality, and the three fingertip contact points:

```text
X Y Z roll pitch yaw x_q y_q z_q w_q lateral_joint_1 lateral_joint_2 d epsilon_quality volume_quality X_1 Y_1 Z_1 X_2 Y_2 Z_2 X_3 Y_3 Z_3
```

Dataset: [Download from Google Drive](https://drive.google.com/drive/folders/1Lcg-l77vlqi1BVYm8FlydDgVehD4JRyB?usp=drive_link)

## Execution

The trained grasp predictor can be run in ROS, followed by the pick-and-place execution node:

```sh
rosrun pick_and_place grasp_prediction.py
rosrun pick_and_place pick_place_gripper_pose
```

PyBullet is used for grasp-quality simulation, while the `Grasp-it` branch contains GraspIt! installation and data-generation instructions.

## Results

The model was evaluated using a UR5e, a Robotiq three-finger adaptive gripper, an Intel RealSense D455, and MoveIt. Predictions took approximately **15 ms**, compared with roughly **20 seconds** for analytical grasp generation in GraspIt! on the reported hardware.

Across 27 validation objects that produced stable grasps under both approaches, ten learned grasps achieved a higher epsilon grasp-quality metric than their GraspIt! counterpart. Hardware trials also demonstrated successful sim-to-real transfer.

<figure>
  <img src="{{ base_path }}/images/3-finger-grasp-planning/hardware_setup.png" alt="UR5e and Robotiq three-finger gripper hardware setup">
  <figcaption>Hardware setup used for the three-finger grasp-planning trials.</figcaption>
</figure>

## Hardware Trials

The hardware trials tested multiple object orientations with the UR5e and three-finger gripper setup.

<style>
  .three-finger-video-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    margin: 1.25rem 0;
  }
  .three-finger-video-grid a {
    display: block;
    text-decoration: none;
  }
  .three-finger-video-grid img {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
  .three-finger-video-grid span {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.85rem;
  }
</style>

<div class="three-finger-video-grid">
  <a href="https://youtu.be/i2BODHclz6M" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/i2BODHclz6M/hqdefault.jpg" alt="Object 1 orientation 1 hardware trial thumbnail">
    <span>Object 1, orientation 1</span>
  </a>
  <a href="https://youtu.be/7vDVp1h4Ydw" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/7vDVp1h4Ydw/hqdefault.jpg" alt="Object 1 orientation 2 hardware trial thumbnail">
    <span>Object 1, orientation 2</span>
  </a>
  <a href="https://youtu.be/gKLEz_waeV8" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/gKLEz_waeV8/hqdefault.jpg" alt="Object 2 orientation 1 hardware trial thumbnail">
    <span>Object 2, orientation 1</span>
  </a>
  <a href="https://youtu.be/g_tg9Y3nOA4" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/g_tg9Y3nOA4/hqdefault.jpg" alt="Object 2 orientation 2 hardware trial thumbnail">
    <span>Object 2, orientation 2</span>
  </a>
  <a href="https://youtu.be/IRkv-CzLW2Y" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/IRkv-CzLW2Y/hqdefault.jpg" alt="Object 3 orientation 1 hardware trial thumbnail">
    <span>Object 3, orientation 1</span>
  </a>
  <a href="https://youtu.be/TvEhQjx80Uw" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/TvEhQjx80Uw/hqdefault.jpg" alt="Object 3 orientation 2 hardware trial thumbnail">
    <span>Object 3, orientation 2</span>
  </a>
  <a href="https://youtu.be/kzqKcuT7bY8" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/kzqKcuT7bY8/hqdefault.jpg" alt="Object 4 orientation 1 hardware trial thumbnail">
    <span>Object 4, orientation 1</span>
  </a>
  <a href="https://youtu.be/NyurH-DUuHU" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/NyurH-DUuHU/hqdefault.jpg" alt="Object 4 orientation 2 hardware trial thumbnail">
    <span>Object 4, orientation 2</span>
  </a>
  <a href="https://youtu.be/-6s4hpb3Slk" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/-6s4hpb3Slk/hqdefault.jpg" alt="Object 5 orientation 1 hardware trial thumbnail">
    <span>Object 5, orientation 1</span>
  </a>
  <a href="https://youtu.be/jcGFYyq38Kc" target="_blank" rel="noopener">
    <img src="https://img.youtube.com/vi/jcGFYyq38Kc/hqdefault.jpg" alt="Object 5 orientation 2 hardware trial thumbnail">
    <span>Object 5, orientation 2</span>
  </a>
</div>

## Tools

`PyTorch` | `ResNet50` | `Blender` | `GraspIt!` | `PyBullet` | `ROS` | `MoveIt` | `UR5e` | `RealSense D455`
