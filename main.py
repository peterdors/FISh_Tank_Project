from constants import *
import requests
import urllib.request
import time, contextlib
from bs4 import BeautifulSoup
from time import sleep

def simple_get(url):
    """
    Attempts to get the content at `url` by making an HTTP GET request.
    If the content-type of response is some kind of HTML/XML, return the
    text content, otherwise return None.
    """
    try:
        with contextlib.closing(requests.get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return None


def is_good_response(resp):
    """
    Returns True if the response seems to be HTML, False otherwise.
    """
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200 
            and content_type is not None 
            and content_type.find('html') > -1)


def log_error(e):
    """
    It is always a good idea to log errors. 
    This function just prints them, but you can
    make it do anything.
    """
    print(e)


from splinter import Browser

from selenium import webdriver


browser = Browser('chrome')

# Visit URL
url = JOB_SEARCH_URL
browser.visit(url)

option = browser.find_by_xpath('//select[@id="com.peopleclick.cp.formdata.JPM_DURATION"]//option[@value="7"]')

option.click()

browser.execute_script('document.getElementsByTagName("select")[3].getElementsByTagName("option")[0].selected = false')

sleep(2)

# Find and click the 'search' button
button = browser.find_by_id('sp-searchButton')


# Interact with elements
button.click()

if browser.is_text_present('Product Manager, Advisory'):
    print("Yes, the official website was found!")
else:
    print("No, it wasn't found... We need to improve our SEO techniques")









