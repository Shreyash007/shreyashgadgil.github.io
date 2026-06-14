---
title: "Autonomous Vineyard Data-Collection Rover"
excerpt: "A low-cost hybrid vision and RTK-GNSS navigation framework for collecting crop imagery in dense vineyards."
collection: portfolio
permalink: /portfolio/vineyard-navigation-rover/
header:
  teaser: 500x300.png
---

{% include base_path %}

Dense vineyard canopies degrade GNSS reception, while narrow rows and uneven terrain make precise autonomous navigation difficult. This project developed a dual-mode framework for reliable spatio-temporal crop-data collection without relying on expensive 3D LiDAR.

<div class="project-image-placeholder"><div><strong>Field deployment placeholder</strong><span>Add a wide image of the rover operating between vineyard rows.</span></div></div>

## Navigation framework

The rover combines two concurrently running systems:

- **Vision-based local planning:** An Intel RealSense D455 produces point clouds that are filtered, divided into left and right boundaries, and clustered with DBSCAN. A projected center-line waypoint feeds a Pure Pursuit-style controller.
- **RTK-GNSS global planning:** A u-blox ZED-F9P manages global waypoints, row transitions, and fallback navigation when visual lane data is unavailable.

The algorithms were first developed in a high-fidelity ROS and Gazebo environment matching the physical platform's dimensions, kinematics, terrain, and sensors.

## Field results

The vision controller achieved a lateral trajectory standard deviation of **0.12 m** during a 20 m run. Adding CORS-assisted RTK-GNSS reduced maximum global navigation deviation from **7.14 m** to **0.88 m**.

Two side-mounted Sony Alpha 6700 cameras were triggered at calculated travel intervals using wheel odometry. The trigger spacing accounted for camera field of view, distance to the canopy, and desired image overlap. Each image was paired with metadata including GPS position, timestamp, filename, and overlap information.

<div class="project-image-placeholder"><div><strong>Navigation visualization placeholder</strong><span>Add the Gazebo environment, RViz point-cloud processing, and recorded trajectory plots.</span></div></div>

## Tools

`ROS Noetic` | `Gazebo` | `Point clouds` | `DBSCAN` | `RTK-GNSS` | `Pure Pursuit` | `RealSense D455` | `Computer vision`
