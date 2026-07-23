---
title: "Vineyard Navigation Rover"
excerpt: "A hybrid vision and RTK-GNSS navigation framework for autonomous spatio-temporal data collection in dense vineyards."
collection: portfolio
permalink: /portfolio/vineyard-navigation-rover/
header:
  teaser: vineyard-navigation-rover/Vehicle_structure.png
---

{% include base_path %}

Dense vineyard canopies degrade GNSS reception, while narrow rows and uneven terrain make precise autonomous navigation difficult. This project developed a hybrid vision and RTK-GNSS framework for reliable autonomous spatio-temporal crop-data collection without relying on expensive 3D LiDAR.

The rover was built to move through vineyard rows, estimate a safe centerline from local perception, transition between rows using global waypoints, and collect repeatable crop imagery with position and timing metadata.

<figure>
  <img src="{{ base_path }}/images/vineyard-navigation-rover/Vehicle_structure.png" alt="Autonomous vineyard rover platform operating between grape rows">
  <figcaption>Field rover platform deployed inside a vineyard row, with the RTK antenna, perception payload, onboard electronics, and camera system mounted for autonomous crop-data collection.</figcaption>
</figure>

## Problem

Vineyards are difficult environments for small autonomous ground vehicles. Dense foliage and trellis structures can block or reflect satellite signals, while the narrow row geometry leaves little margin for navigation error. For repeated crop monitoring, the vehicle also needs to collect imagery at consistent intervals so later observations can be compared across time.

The goal was to design a practical navigation stack that could use local row structure when it was visible, use corrected GNSS for global movement and fallback behavior, and trigger side-facing cameras in a repeatable way during field runs.

## Navigation framework

The system combines two complementary navigation modes:

- **Vision-based local planning:** An Intel RealSense D455 produces point clouds that are filtered into a region of interest, clustered with DBSCAN, and separated into left and right row boundaries. The midpoint between the detected boundaries becomes a projected centerline waypoint for row following.
- **RTK-GNSS global planning:** A u-blox ZED-F9P with CORS-assisted correction handles global waypoint tracking, row transitions, and fallback navigation when visual lane data is unavailable.
- **Control:** The local waypoint is passed to a Pure Pursuit-style controller so the rover can stay centered while moving through the vineyard.

The algorithms were first developed in a high-fidelity ROS and Gazebo environment matching the physical platform's dimensions, kinematics, terrain, and sensors.

<figure>
  <img src="{{ base_path }}/images/vineyard-navigation-rover/RViz1.png" alt="RViz visualization of vineyard row detection, clustering, and projected centerline waypoint">
  <figcaption>RViz visualization of the perception pipeline: point-cloud filtering, centroid extraction, lane-boundary estimation, and projected waypoint generation for row-centered navigation.</figcaption>
</figure>

## Spatio-Temporal Data Collection

Two side-mounted Sony Alpha 6700 cameras were triggered at calculated travel intervals using wheel odometry. The trigger spacing accounted for camera field of view, distance to the canopy, and desired image overlap. Each image was paired with metadata such as GPS position, timestamp, filename, and overlap information.

This lets the rover capture crop imagery in a repeatable sequence, which is useful for monitoring how the same vineyard region changes across multiple field visits.

<figure>
  <img src="{{ base_path }}/images/vineyard-navigation-rover/Final_output.png" alt="Combined field output showing RViz navigation, camera views, and rover deployment in a vineyard">
  <figcaption>Final system output combining local navigation visualization, camera streams, and field deployment of the rover between vineyard rows.</figcaption>
</figure>

## Outcome

The vision controller achieved a lateral trajectory standard deviation of **0.12 m** during a 20 m run. Adding CORS-assisted RTK-GNSS reduced maximum global navigation deviation from **7.14 m** to **0.88 m**.

The project demonstrates that a hybrid vision and RTK navigation stack can support autonomous data collection in dense vineyards while avoiding the cost and complexity of a 3D LiDAR-centered system.

## Publication

The associated paper, **"A Hybrid Vision-RTK Navigation Framework for Autonomous Spatio-Temporal Data Collection in Dense Vineyards,"** has been accepted and is awaiting publication. I will add the formal venue details and publication link once they are available.

## Tools

`ROS Noetic` | `Gazebo` | `RViz` | `Point clouds` | `DBSCAN` | `RTK-GNSS` | `Pure Pursuit` | `RealSense D455` | `u-blox ZED-F9P` | `Sony Alpha 6700`
