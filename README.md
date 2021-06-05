# VaccineSlotFinder
JS browser script to find Vaccine Slot from UI in India via cowin website.

## Prerequisite
 - Before running this do register yourself & your dependents using Adhaar card/s on https://selfregistration.cowin.gov.in

## Steps to perform
 - Visit  https://selfregistration.cowin.gov.in
 - Enter yout mobile number (Do have to register for first time, ref Prerequisite)
 - Enter otp and proceed.
 - Click on shedule button
 ![image](https://user-images.githubusercontent.com/12964174/120893657-09cc9900-c632-11eb-9a5f-c1432b88d497.png)
 - Search using `pincode` or `location`, script will work with either of them, just copy & paste `recVacAlert()` function in browser console & run it.
![image](https://user-images.githubusercontent.com/12964174/120893740-7182e400-c632-11eb-85f0-61326ebf63dd.png)
 ### Search via pincode
 - Enter pincode
 - Copy & paste `recVacAlert()` function in browser console & run it with desired parameter (to understand parameter ref to `recVacAlert` section)
![image](https://user-images.githubusercontent.com/12964174/120893952-74320900-c633-11eb-8f64-5dcc9e007c6b.png)
![image](https://user-images.githubusercontent.com/12964174/120893996-b0fe0000-c633-11eb-8d14-62e21463be43.png)
### Search via location -> State + City
- Select state & city
- Same as pincode: Copy & paste `recVacAlert()` function in browser console & run it with desired parameter
![image](https://user-images.githubusercontent.com/12964174/120894058-1c47d200-c634-11eb-9b7f-0abe898644a1.png)

### recVacAlert() function parameters
![image](https://user-images.githubusercontent.com/12964174/120893974-8e6be700-c633-11eb-9fae-64a96c0022a9.png)
- `recVacAlert(age = 18, minNoOfVac = 3, shouldBook=1, delay = 5000)`
- 1st param -> **age** : Age group (*default: 18*)
- 2nd param -> **minNoOfVac** : Enter minimum no of vaccine required (threshold), will alert only if that many are available (*default: 3*)
- 3rd param -> **shouldBook** : Should take to vaccine booking page if true, else if false then simple raise browser alert if vaccine threshold is met (*default: true*)
- 4th param -> **delay** : Delay in millsecond between each vaccine search call (*default: 5000*).
