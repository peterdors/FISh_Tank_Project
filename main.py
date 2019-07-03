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

browser = Browser('chrome')

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












