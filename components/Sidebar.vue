<template>
  <aside class="sidebar">
    <NavLinks />

    <slot name="top" />

    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
    <div class="pinWraper" @click="$emit('toggle-sidebar')">
      <div class="pinIcon">
        <span class="pinIconTrigger">
          <svg class="icon pin" 
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 5 10"
            width="5"
            height="10"
            xmlns="http://www.w3.org/2000/svg"  id="arrow-left"><path d="M4.929.567l-.006.926a.6.6 0 01-.176.42l-2.86 2.86a.3.3 0 000 .423l2.885 2.885a.6.6 0 01.176.435l-.016.897a.3.3 0 01-.512.207L.068 5.268a.4.4 0 010-.566L4.417.352a.3.3 0 01.512.215z" fill="currentColor" fill-rule="nonzero"></path></svg>
        </span>
      </div>
    </div>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem
  .pinWraper
      width 1rem
      position absolute
      right -1px
      top 0
      bottom 0
      cursor pointer
      &:after
        content "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: -1px;
        width: 1px;
        background-color: $borderColor;
        z-index -999
      &:hover:after
        background-color #bfbfbf
      &:hover 
        .pinIcon
          opacity 1
      .pinIcon
        opacity 0
        transform rotate(180deg)
        width 24px
        transition: opacity .2s ease;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        position: relative;
        left: 2px;
        top: 20px;
        .pinIconTrigger
          display block
          width 24px
          height 24px
          border-radius 50%
          border 1px solid $borderColor
          background-color #fff
          text-align center
          line-height 24px
          font-size 12px
          color #aaa
          &:hover 
            color $accentColor
            border-color $accentColor
          .icon.pin
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top: -2px;
            left -1px


@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
