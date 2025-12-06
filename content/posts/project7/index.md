+++
title = 'Airport Cooperative Research Program (ACRP)'
date = 2024-08-31
summary = """
![一种搬运安装空心混凝土护栏的叉车属具结构图](posts/project7/p7.3.jpg)
*Advised by Dr. Denise Turso at Pennsylvania State University*

Airport Cooperative Research Program (ACRP) project, advised by Dr. Denise Turso, where our team designed LuggageLocator, an RFID-based end-to-end baggage visibility system to reduce mishandled luggage and improve passenger experience. We combined a U-shaped RFID scanning station with a data dashboard and database backend to give airlines and airports real-time baggage status and bottleneck insights. I contributed to problem framing and literature review, concept evaluation using a decision matrix, CAD modeling and structural analysis of the RFID scanner, and testing the web/database prototype to ensure the solution is technically feasible, scalable, and operationally valuable.

#### ⬇️*Click*⬇️ { .text-right }
"""

+++

*Advised by Dr. Denise Turso at Pennsylvania State University*

### Executive Summary

he solution developed and tested by five undergraduate students from the Engineering Leadership Development program at The Pennsylvania State University provides airlines and their clients with real-time baggage information about mishandled baggage to reduce the frustration and dissatisfaction of the passenger’s travel experience, and to provide valuable insight to airports and airlines for improved operations. This addresses our chosen topic within the ACRP Design Challenge, Passenger Experience and Innovations in Airport Terminal Design: Passenger experience technologies such as restroom cleanliness monitoring, passenger wayfinding, smart building systems, etc. Reducing the stress and frustration of passengers using baggage information improves passenger retainment and the airline’s reputation, while also reducing operational inefficiencies such as bottlenecking in the baggage transportation network at airports. Our expert interviews and research into existing baggage handling systems highlighted a lack of visibility both for passengers and airline staff with regards to baggage frequency rates and locations, which if properly gathered and used, could help to address the rising rates of mishandled baggage at busy airports. Our cost-benefit analysis and risk assessments confirm the project’s feasibility and benefit to airlines, with low to medium risk with mitigation, and a cost return period of less than 3 years. The project's recognition of baggage transportation inefficiencies will reduce the mishandled baggage rate and delays once addressed by the airline, streamlining baggage transportation and improving customer experiences. 

### Problem Statement and Background 
This project addresses the design challenge in the category of "Passenger Experience and Innovations in Airport Terminal Design," specifically Challenge C: "Passenger experience technologies such as restroom cleanliness monitoring, passenger wayfinding, smart building systems, etc.," from the 2024 Airport Cooperative Research Program (ACRP) University Design Competition. According to the Department of Transportation, around 5.2 bags per 1,000 passengers were lost in 2023 [6]. While that may sound insignificant, there were a total of 865 million passengers that flew in the US alone in 2023, which means around 4.5 million bags were lost [7], generating not only frustration for customers, but also billions of dollars in cost for airlines. Baggage mishandling continues to increase as well, due to increased travel demand. According to a report from SITA (2023), the mishandled baggage rate increased exponentially by 74.7%, reaching 7.6 bags per thousand passengers in 2022 because of operational disruption following the pandemic, as Figure 1 shown [1]. This surge is largely attributed to the resumption of international and long-haul flights, which involve more transfers where bags are most susceptible to being mishandled. Mishandling rates for international flights are eight times higher than for domestic flights, highlighting the severity of this challenge. 

{{< figure src="p7.4.png" title="[Figure 1: Year-on-year baggage mishandling rates from 2019 to 2022] " >}}
Currently, many airports rely on traditional baggage handling systems that lack real-time tracking and monitoring technologies. This lack of transparency leaves passengers feeling anxious and helpless during the baggage transportation process. 

The goal of this project is to design an intelligent baggage tracking system to improve the efficiency and accuracy of baggage handling, enhance passenger confidence in baggage security, and improve the overall travel experience. 

### Literature Review 
Our research focused on the existing technologies for baggage handling, the vulnerabilities currently affecting those systems, and the impacts of mishandled baggage on passengers, airlines, and airports. We decided to focus on these areas to better understand the process of luggage transport at airports so we could identify strategic opportunities for improvement, and to better understand the impact on the user to develop a design with the user impact and current limitations in mind. In our literature review process, we did not reference any ACRP reports.  

We found that an estimated 80% of mishandled bags are delayed and 42% of all mishandled bags are from transfer mishandling [1]. These delays are caused by bags missing their scheduled flight due to either a late check-in or tight connection. Airports and airlines have invested heavily into modernizing baggage handling technologies [2], from adding RFID to bag tags [3] to introducing automated baggage drop systems, which has allowed airports such as London Heathrow to increase their bag handling rate to 12,000 bags an hour [3]. While not every airport has the money to make improvements to their baggage handling systems, airports such as London Heathrow and Schiphol have made their systems capable of processing more than 50 million bags annually each by automating the entire security and sorting process for checked baggage. We also investigated the impacts of mishandled baggage on passengers, airlines, and airports. The impact on passengers’ emotional states was significant. One study found that over 50% of passengers experienced stress, resignation, and worry when their bag was mishandled [4]. The air travel industry has therefore begun introducing real-time baggage tracking for passenger use to help reassure passengers and reduce the number of high emotions they experience in these situations [5]. Baggage mishandling also has severe impacts on airlines and airports, as not only is their reputation on the line, but they may pay up to $2.4 billion annually compensating customers and transporting the mishandled bags to their destination through other flights and/or ground transportation [5]. 

### Interaction with Industry Experts 
**Dr. Richmond Nettey, Kent State University College of Aeronautics and Engineering**

Dr. Nettey explained that the reason why current baggage claim technology is technologically lacking is because millions of dollars have already been invested into the current infrastructure of airports, making introducing new technology difficult, and expensive. Additionally, “Legacy technology,” or outdated technology used in the past, currently dominates a large portion of the baggage technology market because it is compatible with the infrastructure already in place. Based on these insights, he proposed two areas of most opportunity for improving the baggage handling process to reduce the amount of luggage mishandled, and therefore delayed from reaching its passenger, which are: automating the human interface of bag handling, or improving the methods by which bags are sorted. 

**Eric Greenberger, Wallenpaupack Area High School**

Mr. Greenberger provided insight into the baggage handling process, given his extensive involvement in the aviation industry. Greenberger shared that the process could be improved by RFID technology to sort and transport luggage to ensure it reaches its destination in a timely manner, even in high passenger demand situations. He shared that RFID was feasible because of its inexpensive cost. Another insight provided to improving the luggage handling process was creating an underground luggage transportation system, which would keep the runways and taxiways clear of non-essential traffic, therefore reducing delays and allowing for faster luggage unloading and reloading. 

### Problem-Solving Approach

By implementing the design thinking process in our project, we were able to deeply understand the needs and challenges of airport passengers. Our team included students from different fields, like mechanical and civil engineering, and computer science. This mix of backgrounds gave us a variety of perspectives and skills. Additionally, some team members had personal experiences with losing luggage, giving us a greater understanding of the frustration and anxiety it can cause. By empathizing with the users and working together, we developed a highly effective and innovative luggage tracking system. We have created a design that addresses passenger needs and will also be beneficial to the airport. The design allowed users to always track their luggage, giving them more confidence in the airport luggage system and alleviating concerns about losing their luggage and will allow airports to track luggage rates for certain timeframes. 

**Problem Definition and Point of View Statement:** 

Mishandled baggage continues to be a significant problem in airport operations, often caused by delays during loading or transferring luggage between flights. Many airports are struggling to meet growing travel demands with outdated infrastructure and insufficient technology. While some temporary measures have been introduced, such as enhanced tagging and tracking systems, these solutions are not universally implemented and fail to address the issue comprehensively. To improve customer satisfaction and streamline operations, the industry needs an effective and scalable approach to reduce mishandled baggage rates. Current baggage handling systems lack the real-time tracking capabilities needed to prevent errors, especially during tight connection windows. 

**POV Statement:** 

From our research and interviews with industry experts in airport operations, most mishandled baggage comes from delays in getting loaded or transferred between flights, and current airports lack the infrastructure and technology to meet increasing travel demands. While some investment has been made in temporary solutions, there is not yet a comprehensive and complete plan to drastically reduce mishandled baggage rates. It would be beneficial for passengers, airlines, and airports to find a method to reduce the amount of delayed baggage during transfer in order to increase customer satisfaction. 

**Ideation:** 

Our ideation process began with brainstorming individual ideas, followed by team discussions to review and refine suggestions. We raised concerns, provided feedback, and eliminated less feasible concepts until three final solutions were left. During this phase, we explored multiple RFID-based ideas, innovative baggage organization methods, and potential automation solutions for baggage handling during staff shortages. Each idea was evaluated for practicality, feasibility, and potential impact on baggage handling efficiency. After reviewing all of the information, we performed a detailed analysis of the feasibility and success of each solution using a decision matrix. The matrix shows that the “End-to-End Visibility Tracking and Updates” solution was the highest with an overall rating of 7.625. Although the “Luggage Carts” and “Automated Check in stations” solutions performed well in the complexity and efficiency assessments, their overall scores were still lower than the “End-to-End Visibility Tracking and Updates” solution program. Our ideation process began with brainstorming individual ideas, followed by team discussions to review and refine suggestions. We raised concerns, provided feedback, and eliminated less feasible concepts until three final solutions were left. During this phase, we explored multiple RFID-based ideas, innovative baggage organization methods, and potential automation solutions for baggage handling during staff shortages. Each idea was evaluated for practicality, feasibility, and potential impact on baggage handling efficiency. After reviewing all of the information, we performed a detailed analysis of the feasibility and success of each solution using a decision matrix shown in Figure 2 below. The matrix showed that the “End-to-End Visibility Tracking and Updates” solution was the highest with an overall rating of 7.625. Although the “Luggage Carts” and “Automated Check in stations” solutions performed well in the complexity and efficiency assessments, their overall scores were still lower than the “End-to-End Visibility Tracking and Updates” solution program.  

{{< figure src="p7.5.png" title="[Figure 2: Decision Matrix]  " >}}

### Prototype 

The CAD model [Figure 3] effectively demonstrates the integration of an RFID-tagged baggage system with a U-shaped scanner, measuring 2.5 meters in inner height and 1.2 meters in inner width. The design showcases the practical application of a 360-degree ring scanning sensor, ensuring comprehensive data collection as luggage moves along the conveyor belt. Feedback from initial reviews highlights the model's potential to enhance real-time tracking accuracy and reduce mishandling rates. However, some suggestions include optimizing the scanner's dimensions to better accommodate oversized luggage and exploring energy-efficient sensor technologies to improve sustainability. These insights will guide further iterations to refine the prototype and better meet user needs.

{{< figure src="p7.6.png" title="[Figure 3: CAD model of RFID-tagged baggage system with a U-shaped scanner]   " >}}

Our prototype's software component features an integrated website and database system designed to represent and manage the data gathered from the scanner. This system serves as a central hub for real-time and historical data analysis, enabling users—such as airport or airline staff—to make informed operational decisions. 

The website was developed using the React framework in combination with JavaScript, ensuring a highly responsive and modern user interface. To enhance its visual appeal and usability, CSS was employed to create a clean and intuitive design. The primary objective of the website is to enable stakeholders to seamlessly monitor current data and compare it with historical trends. This functionality provides actionable insights, such as identifying specific gates or areas experiencing congestion. Armed with this information, staff can efficiently allocate resources to mitigate issues like baggage delays, mismanagement, or other operational inefficiencies. 

{{< figure src="p7.7.png" title="[Figure 4, Highlighting specific data points]   " >}}

Figure 4 illustrates how specific data points are highlighted for greater precision in our system. The graphs, a cornerstone of the dashboard, were constructed using JSX cards. These cards were chosen for their flexibility and ease of customization, enabling dynamic data representation. Users can interact with these graphs to focus on particular data points, revealing exact numerical values or trends for detailed analysis. This functionality supports better planning and faster resolution of potential bottlenecks. 

{{< figure src="p7.8.png" title="[Figure 5, Website dashboard]   " >}}

As shown in Figure 5, the website dashboard includes interactive elements designed for intuitive navigation. Drop-down menus positioned at the top of the interface allow users to select specific gates, dates, and timeframes. Our implementation supports data viewing for multiple time periods, including the last 24 hours, 48 hours, and up to the past week, giving users the flexibility to analyze data over varying scales. This modular and adaptable design ensures the system is capable of catering to the dynamic needs of airport or airline staff. 

In summary, the software component of the prototype serves as a powerful tool to improve airport operations, minimize disruptions, and enhance overall efficiency by delivering timely and accurate data through a user-friendly interface. 

### Prototype Testing 

The product is predominantly software with hardware features to aid in the data collection process. This therefore required extensive testing to ensure the software was gathering the data from the hardware, storing it correctly, and then properly feeding that data to the website for further analysis by users. 

From a software perspective, testing needed to be carried out for both the front and back ends. This involved ensuring that the queries we designed for the database worked as intended, that the relationships between data tables were correct and refined as much as possible, and that the data being passed to the website was sufficient enough for use in our desired charts and for displaying other information that passengers and airline staff need, such as the location of a specific bag based on the last checkpoint it reached or how many bags were scanned at a gate/checkpoint in the last day. 

Once the database was built and we inserted some test data (Figure 6), we were able to test each query that the website would request from the backend, as shown in Figure 7. 

{{< figure src="p7.9.png" title="[Figure 6, test data inserted into database]   " >}}

{{< figure src="p7.10.png" title="[Figure 7, example of DB query testing]  " >}}

We had to make some small adjustments for database refinement and foreign key relationships, so the table relationship diagram (Figure 9) in our prototype database differs slightly from the initial design in Figure 8. 

{{< figure src="p7.11.png" title="[Figure 8, first design of ER model] " >}}

{{< figure src="p7.12.png" title="[Figure 9, ER model from MySQL database management software]" >}}
To thoroughly evaluate the functionality and accuracy of the website, we developed a set of placeholder data. This data served as a simulation to test the display and behavior of various data points in the system. Generating this placeholder information required the use of a mathematical package in JavaScript that allowed us to create randomized data. This approach ensured that our prototype had realistic numbers to populate the website’s visualizations, enabling a comprehensive assessment of its design and functionality. 

{{< figure src="p7.13.png" title="[Figure 10, Placeholder data] " >}}

As shown in Figure 10, the placeholder data was programmatically generated using JavaScript libraries. By implementing straightforward yet effective code, we were able to simulate numerical values that closely resembled real-world data inputs. This allowed us to rigorously test the data visualization features and ensure that the graphs, charts, and other UI components accurately reflected the intended information. Leveraging simple yet reliable coding techniques, the placeholder data provided a robust foundation for validating the performance of the prototype. 

To evaluate the implementation of the website, we hosted it on a local device. This was accomplished using npm packages to launch a local development server. Running the website locally enabled us to identify and address any errors in real-time, ensuring seamless functionality across all features. During the testing phase, we assessed key aspects of the website, including data display, interactivity, responsiveness, and overall usability. This iterative process of testing and refining the prototype ensured that the system was robust and user-friendly. 

By combining randomized placeholder data with local hosting, we were able to effectively simulate real-world scenarios and thoroughly evaluate the website’s capabilities. These efforts were crucial to refining the prototype and ensuring its readiness for broader deployment. 

While we had to make minor adjustments to our final prototype design based on our testing and refinement of the software we created, the prototype is working as intended and can easily support being scaled up to encapsulate a larger amount of data typical of a major airport. 

### RFID/Hardware Testing 
This section details the testing process and results of the RFID technology and Hardware CAD model being used for this project.  

The tests of RFID technology were designed to evaluate the effectiveness and range of the RFID technology in accurately tracking luggage within an airport setting. To assess the performance of our RFID tracking system, we conducted tests using an existing RFID tag product (Apple Airtag) placed at various locations around the Penn State Scranton campus and had peers locate the trackers using only the provided app. The goal was to determine the tag's tracking accuracy and range using Apples find my app. The tests started from the engineering building, and the results were measured based on whether the RFID tag could be successfully located. 

Our initial research focused on understanding the potential range and effectiveness of RFID technology. We also considered potential interference from other signals, such as Bluetooth, and found that while they can occasionally interfere, they typically operate on different frequencies, minimizing any significant impact. This research was crucial in setting up our test environment and ensuring accurate results. We also explored the integration of RFID chips into the printed luggage labels used at airports. Our findings showed that such labels are feasible and could be implemented using existing airport printers, enhancing the practicality of our solution. 

We conducted ten tests at different locations with varying distances from the starting point. The table below summarizes the test locations, distances, and results: 

| Test # | Location                        | Approx. Distance from Start | Results |
|--------|---------------------------------|-----------------------------|---------|
| 1      | Center of main parking lot      | 250 ft                      | Pass    |
| 2      | Dawson Building                 | 275 ft                      | Pass    |
| 3      | Engineering Lab                 | 50 ft                       | Pass    |
| 4      | Multi-Purpose Building          | 500 ft                      | Fail    |
| 5      | Lion Statue                     | 300 ft                      | Pass    |
| 6      | ENGR Building Study Room        | 185 ft                      | Pass    |
| 7      | Police and Public Safety Office | 146 ft                      | Pass    |
| 8      | ENGR Building Lecture Room      | 236 ft                      | Pass    |
| 9      | Mechatronics Lab                | 50 ft                       | Pass    |
| 10     | ENGR Building Stairwell         | 20 ft                       | Pass    |

**[Table 1: RFID Testing Results]**

The test results indicated that our RFID tracking system was highly accurate, with only one failure occurring at a location 500 feet away, which was expected from prior research. The other nine tests successfully located the RFID tag within inches of the measured location using the Airtag. These results were very useful for a couple of reasons, not only does it show the RFID technology will work for our application, but more importantly it allowed us to see a potential shortfall in our product. After seeing there is no way to determine the RFID tag’s location after it leaves the detectable range, we decided we needed to add an alarm that will sound if a tag does leave the trackable range so it can still be found and returned. 

In the development and testing of our baggage tracking system, our hardware prototyping part was mainly a recreation of the scene when baggage is scanned using RFID technology, as shown in [Figure 2]. However, we are currently unable to manufacture this, and therefore did not and could not conduct multiple prototype tests, such as environmental adaptation tests as well as durability and user feedback tests. However, CAD model validation was performed, where detailed CAD modeling was performed using SolidWorks to ensure that the design conformed to the desired dimensions and shape. We also performed structural analysis to ensure the physical stability and durability of the model. When building the U-shaped RFID scanner using a 6061 aluminum alloy structure, we found that the maximum deformation distance that occurred in the scanner was only 1.05*10^(-3) mm as shown in [Figure 11] when the load on top of the scanner reached 4 tons, which is fully consistent with the structural stability. 

 {{< figure src="p7.14.png" title="[Figure 11, Simulation of RFID scanner] " >}}

 ***Future Modifications/Improvements:*** List any recommendations for future iterations 

Recommendations for future iterations include:  

Reducing the size of the RFID scanners or transforming the scanning stations into kiosks to create more room in the airport 

Transforming the RFID scanner into a physical attachment that can attach to pre-existing airport luggage scanners to make the uptake process more streamlined 

Implement RFID tags with larger sensing ranges  
### Risk Analysis 
Any product needs careful risk assessment to ensure its use in industry will not damage the client by exposing flaws in the system or leaving the client vulnerable to attacks such as a data breach. It is important to identify all risks associated with the product and then determine their individual risk levels based on the likelihood of that risk occurring and how damaging that vulnerability would be to the company/industry. Identifying risks also allows us to create response plans to carry out, which could either mitigate all/most damage before the attack takes place or execute when the risk occurs to minimize the damage caused. The risk management process is described in AC 150/5200-37A, which is the Advisory Circular on Safety Management Systems for airports [6]. We have followed a similar process as the outlined “5 Steps of SRM Hazard Assessment” from this report to inform the hazards of our product and how we can begin to mitigate them, as well as used the report as a reference when creating our safety risk matrix.  

After performing a risk analysis of our solution, our team identified that the key risks associated with our solution are the following: the RFID tags going out of range of the receivers, loss of internet connection, corruption in the database holding the baggage tracking data, electrical/technical failure of the baggage handling system, and finally interference with the RFID tags due to internet and other wireless signals. We created the risk matrix in Figure 12 based on these risks which evaluates each risk’s individual risk level to determine whether they affect the product’s viability or not. Lastly, we created risk mitigation strategies to limit the potential damage, and where possible, eliminate the possibility of the risk occurring.  

 {{< figure src="p7.15.png" title="[Figure 12, Risk Matrix]" >}}

 {{< figure src="p7.16.png" title="[Figure 13, List of risks & recommended risk mitigation strategies]" >}}

  After assessing our risks, we determined that the risks that we have are acceptable with appropriate mitigation measures. The most hazardous risk to our product is corruption in the database holding the baggage data. We plan to mitigate this risk by taking backups of the database every week and running checks of the database weekly to save a backup of the uncorrupted database to avoid any major data losses. We mitigate our other risks through regular maintenance (such as with the possibility of electrical failure) or complete segregation to avoid the risk entire, such as with creating boundaries to prevent the tags from leaving trackable range. We can continue to monitor the risks associated with the product by having a tracking platform to continuously monitor for risk, and to conduct a risk analysis in the event of a failure (such as the database corrupting) to prevent future risk.  

### Cost Benefit Analysis
This section summarizes the costs and benefits associated with our RFID baggage tracking system. The results of the cost-benefit analysis for this design are detailed in Table 2. Our Cost Benefit Analysis (CBA) systematically evaluates whether the benefits of our system outweigh the costs, focusing on annual benefit-to-cost ratios and payback periods. We modeled this analysis using the RFID baggage tracking system developed by AGS, Inc. for the Metropolitan Airports Authority and used ATL Airport as a prototype for the study. After conducting the CBA, we found that the product was financially viable because the first year CBA ratio for our projected costs was less than 1 and we could recover our costs within 3 years. Table 2 below summarizes the overall results of the CBA, showing our expected costs, revenues, and CBA ratios over the 3-year period. 

| Item                        | Rate            | Quantity | Subtotal          |
|-----------------------------|-----------------|----------|-------------------|
| **Net Values**              |                 |          |                   |
| Initial Costs               | $137,648.00     | 1        | $137,648.00       |
| Yearly Costs                | $154,625,787.50 | 3        | $463,877,362.50   |
| Yearly Benefits             | $357,599,549.29 | 3        | $1,072,798,647.88 |
|                             |                 |          |                   |
| **Analysis**                |                 |          |                   |
| Yearly Benefit-to-Cost Ratio|                 |          | 0.43              |
| Payback Time                |                 |          | 0.68              |

**[Table 2: Cost vs. Benefit Analysis Summary]**
We have cost the development phase in 5 parts, with the first 4 phases being initial cost subtotals and the last phase being annual cost subtotals. The first phase of development is the R&D phase, or alpha phase, which demonstrates our concept and preliminary research. Essentially these concept generation as well as preliminary studies are not too costly as it is mainly the labor cost of the students, we plan to pay the students at the rate of $15 per hour, and we need 10 capable students to work for 5 hours a day for a total of 5 days to complete the initial concept generation as well as the preliminary studies of the project. Thus, the total cost is =$ 15*5*5*10 = 3750 USD as shown in table 3 below. 

| Item            | Rate   | Quantity | Subtotal   |
|-----------------|--------|----------|------------|
| Student Efforts | $15.00 | 250      | $3,750.00  |
| **Subtotal**    |        |          | $3,750.00  |

**[Table 3: Research and Development Costs Alpha Phase]**

The next stage of development is the testing phase of R&D, which indicates the ongoing investment in research, collaboration with experts to develop the product, and the associated student labor costs as well as travel to the airport site. For the research input costs, we would need to spend roughly $25 per research article for access, and in total we would need to research about 20 or so articles, making the total cost $500. For expert collaboration costs, we are looking at an expert with an annual salary of $80k, so an hourly rate would be $40, and we would need 7 hours of collaborative research, so that would be a $280 expense. For student labor costs, we are still calculating at $15 per hour which is the average salary for a Penn State student, we need 10 people to work for 5 hours, which is $750, and for getting to the airport, we only need $13 which is based on the cost of gas for the car. The main details of this phase are shown in table 4 below. 

| Item                    | Rate   | Quantity | Subtotal  |
|-------------------------|--------|----------|-----------|
| Student Efforts         | $15.00 | 50       | $750.00   |
| Payment to Experts      | $40.00 | 7        | $280.00   |
| Travel                  | $13.00 | 1        | $13.00    |
| Research Article Access | $25.00 | 20       | $500.00   |
| **Subtotal**            |        |          | $1,543.00 |

**[Table 4: Research and Development Costs Beta Phase]** 

Next comes the final stage of research and development (Charlie). This is to review and validate our products with industry experts and get feedback from them. Again, our labor expense for students is calculated at $15 per hour. For experts, it is calculated at $40 per hour, which is $225 and $80 respectively. The details are shown in Table 5 below. 

| Item               | Rate   | Quantity | Subtotal  |
|--------------------|--------|----------|-----------|
| Student Efforts    | $15.00 | 15       | $225.00   |
| Payment to Experts | $40.00 | 2        | $80.00    |
| **Subtotal**       |        |          | $305.00   |

**[Table 5: Research and Development Costs Charlie Phase]**

In the final phase of development, the production, marketing and distribution phase, we will install and test our RFID baggage tracking system at the ATL airport. The specific overhead for this phase is as follows: Logistics labor costs are $60 per hour for 50 hours totaling $3,000, which assumes 50 hours of logistics support for every 100 units. Engineering management costs are $175 per hour for 100 hours totaling $17,500, which covers the 200 hours of engineering operations management required per 100 units. Modeling labor costs are $40 per hour for 100 hours for a total of $4,000, based on a goal of producing 100 units per year. The annual cost of a SolidWorks license is $3,465, which is required for product design and modeling. Testing costs are $25 for materials and tools required for testing. Testing travel costs are $15 per visit for 2 visits totaling $30 for mileage reimbursement for testing related travel. Product installation labor costs were $75 per hour for 1,040 hours totaling $78,000, which assumes that only changes to the baggage infrastructure were required during installation. These costs ensured the successful production, marketing, and installation of our system at ATL airports, setting the stage for its deployment, as detailed in Table 6 below. 

| Item                        | Rate     | Quantity | Subtotal   | Remarks                                                  |
|-----------------------------|----------|----------|------------|----------------------------------------------------------|
| Logistics Labor             | $60.00   | 50       | $3,000.00  | Assumes 50 hours logistics labor per 100 units           |
| Engineering Management      | $175.00  | 100      | $17,500.00 | Assumes 200 hours engineering operations per 100 units   |
| Modeling Labor              | $40.00   | 100      | $4,000.00  | Production goal 100 units per year                       |
| SolidWorks License          | $3,465.00| 1        | $3,465.00  | Annual cost for professional SolidWorks license          |
| Testing expenses            | $25.00   | 1        | $25.00     | Testing materials and tools needed.                      |
| Testing travel expenses     | $15.00   | 2        | $30.00     | Mileage reimbursement                                    |
| Product installation labor  | $75.00   | 1040     | $78,000.00 | Assumes only luggage infrastructure needs to be changed  |
| **Subtotal**                |          |          | $81,520.00 |                                                          |

**[Table 6: Production, Marketing and Distribution Cost]**

The final phase of development is the operations and maintenance phase, and the costs of this phase constitute a subtotal of the annual costs. The main costs come from web development, database server hosting, RFID tagging, and paying airport employees. To begin with, network back-end and front-end support each cost $230,000 per year, totaling $690,000 over three years, assuming 40 hours per week of maintenance is required. This cost ensures system stability and continuous updates to meet changing user needs. Database server hosting costs $45,600 per year, which is critical in ensuring secure and efficient access to data, totaling $136,800 over three years, relying on services provided by AWS. Server hosting costs are $5,000,000 per year, totaling $15,000,000 over three years, assuming 24/7 hosting on AWS throughout the year. This cost reflects the need for high availability and reliability of the system to ensure that peak traffic can be handled at all times. Baggage tagging costs approximately $9,000 per day, assuming all checked bags are tagged daily at a cost of $0.10 per tag, totaling $9,855,000 over three years. With RFID tagging, baggage handling is much more efficient, reducing the risk of loss and misdirection. Finally, airport support staff costs amount to $114,910,030 per year, totaling $344,730,090 over three years, assuming two employees are needed for maintenance and system oversight. This investment protects the day-to-day operation of the system and timely problem resolution, enhancing the overall customer experience. Detailed data are shown in table 7 below. 

| Item                     | Rate         | Quantity | Subtotal       | Remarks                                                     |
|--------------------------|--------------|----------|----------------|-------------------------------------------------------------|
| Web Back-end Support     | $115,000.00  | 2        | $230,000.00    | Assumes 40 hours of upkeep per week per year                |
| Web Front-end Support    | $115,000.00  | 2        | $230,000.00    | Assumes 40 hours of upkeep per week per year                |
| Database server hosting  | $3,800.00    | 12       | $45,600.00     | Cost to host DB per year on AWS                             |
| Server hosting costs     | $5,000,000.00| 1        | $5,000,000.00  | Assumes 24/7 server hosting on AWS, 8760 hours per year     |
| Bag tagging expenses     | $9,000.00    | 365      | $3,285,000.00  | Approx cost to tag all checked bags each day (1 tag = $0.10)|
| Airport support staff    | $314,822.00  | 365      | $114,910,030.00| Assumes 2 staff needed for repairs and system overseeing    |
| **Subtotal**             |              |          | $123,700,630.00|                                                             |

**[Table 7: Operations and Maintenace Phase]** 

A summary of the costs from Tables [3-7] is summarized in table 8 below.  

| F. Cost Summary           |              |
|---------------------------|--------------|
| **Initial Costs**         |              |
| Year 0 Subtotal           | $110,118.40  |
| Overhead and Profit       | $27,529.60   |
| **Initial Cost Total**    | **$137,648.00** |
|                           |              |
| **Production Costs**      |              |
| Yearly Cost Subtotal      | $123,700,630.00 |
| Overhead and Profit       | $30,925,157.50  |
| **Yearly Cost Total**     | **$154,625,787.50** |

**[Table 8: Cost Summary]**
After analyzing the costs, we have summarized the key benefits of an RFID baggage tracking system. These benefits are based on ATL airport metrics and will significantly improve operational efficiency and customer satisfaction. First, the system will significantly reduce the airline's labor costs, saving approximately $9.5 million per year, or more than $28 million over three years combined, by reducing the need for baggage delivery drivers. Second, the system will alleviate the stress travelers experience due to lost baggage. We anticipate a 33% increase in customer loyalty, generating approximately $178 million per year, totaling over $530 million over three years. In addition, by utilizing historical data to improve baggage handling forecasts, the system will reduce baggage loss by 25%, generating approximately $170 million annually and over $510 million cumulatively over three years. Overall, the total benefit to airport operations will be approximately $358 million per year and over $1.07 billion cumulatively over three years.  Detailed data are shown in table 9 below. 

| Benefit                                          | Rate       | Quantity  | Subtotal         | Comments                                                        |
|--------------------------------------------------|------------|-----------|------------------|-----------------------------------------------------------------|
| **Tangible**                                     |            |           |                  |                                                                 |
| Reduced labor costs for airlines                 | $26,235.00 | 365       | $9,575,775.00    | Eliminates luggage delivery drivers for airports, 3 ppl * 8hrs * 365d |
| Better predictions of luggage rates based on past data | $2,500.00  | 68058.47  | $170,146,166.25  | Eliminate 25% lost bags by better tracking system               |
| **Intangible**                                   |            |           |                  |                                                                 |
| Less stress to travelers about losing bags       | $11.88     | 14972863  | $177,877,608.04  | 33% increase in loyal customers, $11.88 per year per customer   |
| **Total Yearly Benefit**                         |            |           | **$357,599,549.29** |                                                                 |

**[Table 9: Benefits Summary]**
Our RFID tracking system addresses the high mishandled baggage rates currently experienced across many commercial airlines. The data collected at frequent checkpoints across the baggage transport system addresses these issues by automating the baggage scanning process while also collecting real time locations of the luggage across its journey through the airport. This is to not only reduce the amount of luggage mishandled, but also to identify bottlenecks in the system, predict daily luggage values in the future, and enhance passenger experiences while traveling in combination with our website. Our short payback period and low cost-benefit ratio makes us a top choice for airlines seeking to reduce the costs endured each year due to mishandled baggage while also providing their customers with a relaxed travel experience.

### Future Implications 
With the creation of LuggageLocator, passengers, airlines, and airports can navigate the luggage handling process with ease. Using RFID tags and tracking technology, we have created a solution to the unpredictability of the baggage handling system. Moving forward, we will expand testing to include comprehensive environmental assessments. These tests will replicate temperature fluctuations, humidity exposure, and physical wear to ensure the RFID tags embedded in printed labels maintain their reliability and performance under real-world airport conditions. Initial testing has shown promising results, with RFID tags in printed labels maintaining signal integrity and accuracy, which we will build upon through these extended trials. Stress testing, such as repeated bending and pressure applications, will confirm the tags' robustness and long-term durability. To improve our physical model, we will collaborate with manufacturers to explore potential production methods for producing the physical RFID tags integrated into labels. This will include evaluating different materials and manufacturing techniques to enhance durability while balancing cost. These steps will ensure our tags are ready for widespread application in an airport environment.  

Next steps for the website involve incorporating more advanced data analytics features. We plan to add predictive algorithms that can forecast potential baggage handling issues based on historical trends, allowing airport staff to proactively manage resources and address problems before they escalate. This will allow airports to track when there is more luggage and can hire more employees ahead of time. Our prototype will also allow users to view baggage handling trends over different timeframes and we will conduct further user feedback sessions to maintain an intuitive interface that aligns with staff needs. Potential future improvements will include real-time alerts that notify staff of sudden spikes in mishandled or delayed baggage, enabling quicker responses and improved operational efficiency.  

Finally, integrating live data streams from RFID checkpoints into the website will be prioritized. This step will involve creating a seamless connection between the physical RFID system and the digital database, ensuring data accuracy and timely updates. This will allow for real-time tracking and better decision-making by airport staff, ultimately enhancing the overall efficiency of baggage management. 


### References 

[1] SITA. (2023). 2023 baggage IT insights. SITA.    http://sita.aero/globalassets/docs/surveys--reports/2023-baggage-it-insights-exec.pdf 

[2] Instituto de Transportes e Logística. (2021). Security baggage process and on-time    performance at GRU (No. 92). https://repositorio.itl.org.br/jspui/bitstream/123456789/92/1/Security%20Baggage%20Process%20and%20On%20Time%20Performance%20at%20GRU.pdf 

[3] International Air Transport Association. (2024, May 9). Baggage technology release. https://www.iata.org/en/pressroom/2024-releases/2024-05-09-01/ 

[4] Springer. (2020). Baggage tracking technology for airports. SpringerLink. https://link.springer.com/article/10.1023/A:1024498629430 

[5] Airport Technology. (n.d.). Baggage tracking technology for airports.  

https://www.airport-technology.com/features/baggage-tracking-technology-for-airports/?	cf-view 

[6] U.S. Department of Transportation, Bureau of Transportation Statistics. (n.d.). Mishandled 

baggage reports filed by passengers on the largest U.S. air carriers. BTS. Retrieved  December 16, 2024, from  https://www.bts.gov/content/mishandled-baggage-reports- 

filed-passengers-largest-us-air-carriers 

[7] Statista. (n.d.). Total enplaned passengers on U.S. airlines from 2004 to 2023. Retrieved December 16, 2024, from https://www.statista.com/statistics/197801/total-us-airline-	passenger-enplanements-since-	2004/#:~:text=In%202023%2C%20U.S.%20airlines%20recorded,million%20passengers%20recorded%20in%202019. 