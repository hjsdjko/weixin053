package com.cl.entity.view;

import com.cl.entity.GenghuanzuoweiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 更换座位
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-13 14:51:25
 */
@TableName("genghuanzuowei")
public class GenghuanzuoweiView  extends GenghuanzuoweiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public GenghuanzuoweiView(){
	}
 
 	public GenghuanzuoweiView(GenghuanzuoweiEntity genghuanzuoweiEntity){
 	try {
			BeanUtils.copyProperties(this, genghuanzuoweiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
