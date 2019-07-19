# Peter Dorsaneo
# 
# Summer 2019 FIS(h) Tank Project, Team 3
# ========================================
# Python script to load a Chrome web page of the FIS Careers website and auto
# load the list of available intern positions.
# 
# USAGE: python main.py

from constants import *
from splinter import Browser
from time import sleep

# browser = Browser('chrome')
browser = Browser('chrome', headless=True) # Doesn't display Chrome

# Visit URL.
url = JOB_SEARCH_URL
browser.visit(url)

# Find and click on the 'Intern' positions from the website. 
option = browser.find_by_xpath('//select[@id="com.peopleclick.cp.formdata.JPM_DURATION"]//option[@value="7"]')
option.click()

# Javascript injection to unselect the option for 'all' positions. 
# Without this, the webpage will still load all the open positions from the site.  
browser.execute_script('document.getElementsByTagName("select")[3].getElementsByTagName("option")[0].selected = false')

# Find and click the 'Search' button from the website. 
button = browser.find_by_id('sp-searchButton')
button.click()

# Pause for bit to let things load due to potentially bad connections. 
sleep(2) 

# Extract the job positions as titles from the website. 
positions = browser.find_by_css('div[class=" pf-sr-titleInnerWrapper"] > a')
# Extract the locations of the each of the jobs.
locations = browser.find_by_css('div[class="clearfix col-xs-12 col-sm-7 col-md-8 pf-padding-left pf-rwd-titlefieldsbox"] > div > span[id="com.peopleclick.cp.fieldlabel.index_0.JPM_LOCATION_value"]')
# Extract the brief descriptions from the job posting, this does not work currently. 
# descriptions = browser.find_by_css('div[class="col-xs-12 visible-xs pf-paddingzero pf-rwd-jobPostDecription pf-rwd-wordwrap"] > span[id="com.peopleclick.cp.fieldlabel.index_0.JPM_DESCRIPTION_value"] > span[class="ng-binding"]')

# We will store the relevant job data into a list of dictionaries for our data
# structure. 
job_list = []

# Add the jobs position and location as a dictionary to our job_list. 
for position, location in zip(positions, locations): 
	job_list.append({POSITION : position.value, LOCATION : location.value, LINK : position['href']})

file = open('internships.txt', 'w')

# write the position and locations from our job listings into a text file. 
for jobs in job_list:
	# we know we only have two keys (so far) so use those. 
	file.write('{}\n'.format(jobs[POSITION]))
	file.write('{}\n'.format(jobs[LOCATION]))
	file.write('{}\n'.format(jobs[LINK]))

# Cleanup :)
file.close()
