+++
title = 'RFID-Assisted Baggage Visibility System'
date = 2024-08-31
summary = "A 2024 ACRP competition concept combining a U-shaped RFID scanner with end-to-end baggage visibility."
+++

*2024 Airport Cooperative Research Program (ACRP) University Design Competition - advised by Dr. Denise Turso, Pennsylvania State University*

## Project Goal

LuggageLocator is a team concept for reducing mishandled baggage by making each handoff visible across airport checkpoints. A U-shaped RFID scanning station captures each bag's movement; the integrated system turns those events into operational information for airport staff, airline staff, and passengers.

## Problem Framing

The project began with research into delayed and mishandled baggage, airport operating constraints, and passenger impact. Industry input and literature review were used to define a design direction that had to improve visibility without requiring a complete replacement of existing baggage infrastructure.

## Concept Selection

The team generated several concepts and evaluated them with a weighted decision matrix. End-to-end RFID visibility was selected because it connected a feasible physical scanning approach with operational information that can reveal missed handoffs and congestion.

{{< figure src="p7.5.png" title="Decision matrix used to select the end-to-end visibility concept" >}}

## End-to-End System

When a bag passes through a scanner, the RFID read becomes a timestamped checkpoint event. The team system stores the bag identifier, location, status, and scan time; the dashboard then exposes current bag status, scan history, throughput patterns, and potential bottlenecks. This keeps the concept grounded in a complete operational workflow rather than treating RFID as an isolated sensor.

{{< figure src="p7.6.png" title="U-shaped RFID baggage-scanner concept at a conveyor checkpoint" >}}

## Dashboard and Data Workflow

The website dashboard and relational-database prototype were designed and implemented by a teammate. They are shown here to document the complete team deliverable, not as my individual software work. The dashboard supports airport operations by filtering baggage events by gate, date, and time window, then surfacing individual bag status and aggregate flow information.

{{< figure src="p7.8.png" title="Team dashboard for monitoring baggage status and checkpoint activity" >}}

The final entity-relationship model links baggage records, flight information, checkpoints, and scan events. This data structure makes it possible to trace a bag's journey and identify missing or delayed handoffs without replacing the entire baggage-handling system.

{{< figure src="p7.12.png" title="Final team data model for baggage, flights, checkpoints, and scan events" >}}

## Physical Scanner Design

My work focused on the hardware side of the project. I modeled the U-shaped scanner in SolidWorks, defined the scanner envelope around a baggage conveyor path, and evaluated the structure as a practical physical interface for RFID-based tracking.

- The scanner geometry provides 360-degree tag-read coverage around the baggage path.
- The concept was sized around a 2.5 m inner height and 1.2 m inner width.
- Structural analysis evaluated a 6061 aluminum frame under a 4-ton top load; the model reported a maximum deformation of approximately 1.05 x 10^-3 mm.

{{< figure src="p7.14.png" title="Structural simulation of the U-shaped RFID scanner" >}}

## Validation and Feasibility

The team tested the database workflow with representative baggage records and SQL queries to validate that scan events could be written, retrieved, and associated with the correct operational context. Hardware feasibility work considered RFID read coverage, scanner geometry, structural integrity, and its fit around an active baggage conveyor path.

{{< figure src="p7.10.png" title="Team query test used to validate baggage-event retrieval" >}}

## My Contribution

I led problem definition and literature research, decision-matrix concept selection, scanner CAD modeling, structural analysis, and RFID hardware feasibility/testing. My work made the physical sensing point technically credible: its geometry, load behavior, tag-read envelope, and fit within baggage-handling flow. The dashboard and database components were my teammate's responsibility.

## Design Value

LuggageLocator connects an implementable physical scanning station with a usable airport-operations view. The combined team deliverable demonstrates how a bag's physical checkpoint event can become traceable operational data, while my contribution focuses on the engineering feasibility of the RFID station itself.

## Tech Stack

Team system: RFID architecture, SolidWorks CAD, structural analysis, React, JavaScript, CSS, relational database design, SQL validation, cost-benefit analysis, and risk assessment. Individual focus: hardware concept development, scanner CAD, structural analysis, and RFID feasibility testing.
