package com.cl.dao;

import com.cl.entity.GenghuanzuoweiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.GenghuanzuoweiView;


/**
 * 更换座位
 * 
 * @author 
 * @email 
 * @date 2024-03-13 14:51:25
 */
public interface GenghuanzuoweiDao extends BaseMapper<GenghuanzuoweiEntity> {
	
	List<GenghuanzuoweiView> selectListView(@Param("ew") Wrapper<GenghuanzuoweiEntity> wrapper);

	List<GenghuanzuoweiView> selectListView(Pagination page,@Param("ew") Wrapper<GenghuanzuoweiEntity> wrapper);
	
	GenghuanzuoweiView selectView(@Param("ew") Wrapper<GenghuanzuoweiEntity> wrapper);
	

}
