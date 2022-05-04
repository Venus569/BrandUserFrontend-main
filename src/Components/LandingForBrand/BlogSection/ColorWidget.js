import React from 'react'

export const ColorWidget = () => {
  return (
    <><div class="widget socail-widget mb-40">
    <h5 class="widget-title">Category</h5>
    <div class="filter-color">
      <form>
        <label class="checkbox">
          <input type="checkbox" name="#"/>
          <span class="custom-box"></span>
          Criminal
        </label>
        <label class="checkbox">
          <input type="checkbox" name="#"/>
          <span class="custom-box"></span>
          Marraige
        </label>
        <label class="checkbox">
          <input type="checkbox" name="#"/>
          <span class="custom-box"></span>
          City influencer
        </label>
        <label class="checkbox">
          <input type="checkbox" name="#"/>
          <span class="custom-box"></span>
          Business influencer
        </label>
        <label class="checkbox mb-0">
          <input type="checkbox" name="#"/>
          <span class="custom-box"></span>
          Corporate influencer
        </label>
      </form>
    </div>
  </div></>
  )
}

